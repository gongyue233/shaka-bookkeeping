<template>
    <Layout class-prefix="statistics">
        <Types :type.sync="typeSta"/> 
        <div>
            <ol class="groups">
                <li v-for="group in groupList" :key="group.title" class="group">
                    <h3>{{handleDay(group.title)}}  <span>{{group.total}} </span></h3> 
                    <ol class="items">
                        <li v-for="item in group.items" :key="item.id" class="item">
                            <Icon :name="getIcon(item.tagId, item.type)" class="label-icon" />
                            <div class="tagContent">
                                {{getTagContent(item.tagId, item.type)}} <br> 
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
import {Component, Prop} from 'vue-property-decorator';
import RecordItem from '@/help/custom';
import dayjs from 'dayjs'; 
import clone from '@/lib/clone';
import HashD from '@/help/HashD';

@Component({
    components:{Icon, Types}
})
export default class Statistics extends Vue{
    typeSta = '-';
    created(){
        this.$store.commit('fetchRecord');
    }    
    get recordList():RecordItem[]{      
        return this.$store.state.record.recordList      
    }
    handleDay(msg:string): string{
        const day = dayjs(msg);
        const now = dayjs();
        if(msg==='无'){return '无'}
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
    get groupList(): HashD[] {
        const {recordList} = this;
        if(recordList.length === 0){ return [{ title:'无', items:[]}]}
        const newRecordList = clone(recordList)
            .filter(r=>r.type===this.typeSta)  // filter过滤出是支出还是收入
            .sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf() );
        // 排序，为了不影响原来的对象使用clone函数
        const result: HashD[] = [
            {title: dayjs(newRecordList[0].createAt).format('YYYY-M-D'),
            items:[newRecordList[0]]}
        ];
        for(let i = 1; i < newRecordList.length; i++){ 
            const current = newRecordList[i];    
            const itemLast = result[result.length-1];  
            if(dayjs(itemLast.title).isSame(dayjs(current.createAt), 'day')){
                itemLast.items.push(current);                
            }else{  
                result.push({title: dayjs(current.createAt).format('YYYY-M-D'), items:[current]})
            }
        }        
        result.forEach(group=>{            
            group.total = group.items.reduce( (sum, item) => sum + item.amount, 0 )
        })

        return result;
    }
    getIcon(id: number, ty: string): string | undefined{
        if(ty==="-"){return this.$store.state.tag.costList[id-1].name}
        if(ty==='+'){return this.$store.state.tag.earnList[id-1].name}
        
    }     
    getTagContent(id: number, ty: string): string | undefined{
        if(ty==="-"){return this.$store.state.tag.costList[id-1].tagContent}
        if(ty==="+"){return this.$store.state.tag.earnList[id-1].tagContent}
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
                min-height: 48px;
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