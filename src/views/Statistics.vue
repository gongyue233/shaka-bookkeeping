<template>
    <Layout class-prefix="statistics">
        <Types :type.sync="typeSta"/> 
        <Echart :option="chartOption" />
        <div>
            <ol class="groups">
                <li v-for="group in groupList" :key="group.title" class="group">
                    <h3>{{handleDay(group.title)}}  <span>{{group.total}} </span></h3> 
                    <ol class="items">
                        <li v-for="item in group.items" :key="item.id" class="item">
                            <Icon :name="getIcon(item.tagId)" class="label-icon" />
                            <div class="tagContent">
                                {{getTagContent(item.tagId)}} <br> 
                                <span class="notes">{{item.notes}}</span>
                            </div> 
                            <span class="amount">{{item.amount}} </span>                           
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';  
import Icon from '@/components/Icon.vue';
import Types from '@/components/Types.vue';
import {Component, Watch} from 'vue-property-decorator';
import RecordItem from '@/help/custom';
import dayjs from 'dayjs'; 
import clone from '@/lib/clone';
import HashD from '@/help/HashD';
import TagD from '@/help/tagd';
import Echart from '@/views/Echarts.vue';
import { EChartsOption } from 'echarts';
import _ from 'lodash';
@Component({
    components:{Icon, Types, Echart}
})
export default class Statistics extends Vue{
    typeSta = '-';
    
    created(){
        this.$store.commit('fetchRecord');
    }    
    get recordList():RecordItem[]{    //依据类型返回支出或收入的记录      
        const newRecordList = clone(this.$store.state.record.recordList)
            .filter((r: TagD)=>r.type===this.typeSta);
            // filter过滤出是支出还是收入
        return newRecordList      
    }
    handleDay(msg:string): string{  //处理时间的显示
        const day = dayjs(msg);
        const now = dayjs();
        if(msg==='目前没有记录'){return '目前没有记录'}
        if(day.isSame(now,'day')){
            return '今天'
        }else if(day.isSame(now.subtract(1, 'day'), 'day')){
            return '昨天'
        }else if(day.isSame(now.subtract(2, 'day'), 'day')){
            return '前天'
        }else if(day.isSame(now, 'year')){
            return day.format('M月D日') 
        }else{
            return day.format('YYYY年M月D日');
        }
    }
    get groupList(): HashD[] {  // 得到有相同createAt 的具体记录的哈希表，一个createAt对应多个记录
        const {recordList} = this;
        if(recordList.length === 0){ return [{ title:'目前没有记录', items:[] ,total: 0}]}
        const newRecordList = clone(recordList)
                    .sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
        // 排序，为了不影响原来的对象使用clone函数
        const result: HashD[] = [
            {title: dayjs(newRecordList[0].createAt).format('YYYY-MM-DD'),
            total: newRecordList[0].amount,
            items:[newRecordList[0]]}
        ];
        for(let i = 1; i < newRecordList.length; i++){ 
            const current = newRecordList[i];    
            const itemLast = result[result.length-1];  
            if(dayjs(itemLast.title).isSame(dayjs(current.createAt), 'day')){
                itemLast.items.push(current);                
            }else{  
                result.push({title: dayjs(current.createAt).format('YYYY-MM-DD'),total:0, items:[current]})
            }
        }        
        result.forEach(group=>{            
            group.total = group.items.reduce( (sum, item) => sum + item.amount, 0 )
        })
        return result;
    }
    getIcon(id: number): string | undefined{  //得到图标
        return this.$store.state.tag.tagList[id].name
    }     
    getTagContent(id: number): string | undefined{ //标签名
        return this.$store.state.tag.tagList[id].tagContent
    }   
    get arrayChart():{date:string, value:number}[]{
        const arrayChart = [];
        for( let i = 0; i <= 29; i++ ){ //遍历过去的30天
            const dateString = dayjs().subtract(i, 'day').format('YYYY-MM-DD');            
            const found = _.find(this.groupList, {
                title: dateString
            });// 找到title=dateString的数据
            let value2 = 0;
            if(found){
                value2 = found.total;
            }else{
                value2 = 0
            }
            arrayChart.push({
                date: dateString, value:value2
            });
        }
        arrayChart.sort( (a, b) => {
            if( a.date > b.date ){
                return 1;
            }else if( a.date === b.date ){
                return 0;
            }else{
                return -1;
            }
        });
        return arrayChart;
    }  
    get chartOption():EChartsOption{
        const keys:string[] = this.arrayChart.map(item => item.date.substr(5));
        let chartColor;
        if(this.typeSta==='-'){
            chartColor = '#1296db'
        }else{
            chartColor = 'red'
        }
        const valuesChart = this.arrayChart.map(item => item.value)
        return {            
            grid:{
                left: '10px',
                right: '10px'
            },   
            color: chartColor,
            xAxis: {
                type: 'category',
                data: keys,
                axisTick:{
                    alignWithLabel: true
                },
            },
            yAxis: {
                type: 'value',
                show:false
            },
            series: [{
                name:'账单',
                data: valuesChart,
                type: 'line',  
                symbolSize: 10,   
            }],   
            tooltip:{
                show: true,
                triggerOn: 'mousemove|click',
                position: 'top',
                formatter: '{c}',
                backgroundColor:'white',
            }
        }
    }  

   
}
</script>
<style lang="scss">
@import "~@/assets/commen.scss";
.statistics-content{
    background-color: $color-back-q;
}
</style>

<style lang="scss" scoped>
@import "~@/assets/commen.scss";
.groups{
    color: #333;    
    padding: 10px 12px;       
    .group{     
        margin-bottom: 10px;
        h3{
            display: flex;
            justify-content: space-between;
            font-size: 16px;  
            padding: 6px;          
        }
        .items{
            .item{
                background-color: white;                
                border: 1px solid #d9d9d9;
                min-height: 52px;
                border-radius: 8px;   
                display: flex;                
                align-items: center;
                margin-bottom: 6px;                
                font-size: 16px;
                .tagContent{
                    @extend %content;
                    padding: 2px 10px; 
                    flex-grow: 1;    
                    .notes{
                        font-size: 13px;
                        color: gray;
                    }               
                }
                > .label-icon{
                    margin-left: 12px;
                    flex-shrink: 0;  
                                      
                }
                .amount{
                    padding: 0 10px; 
                }
            }
        }
    }
}
</style>