<template>
    <Layout>
        <Types :type.sync="typeSta"/> 
        <div>
            <ol>
                <li v-for="group in groupList" :key="group.title">
                    <h3>{{handleDay(group.title)}}</h3>
                    <ol>
                        <li v-for="item in group.items" :key="item.id">
                            <Icon :name="getIcon(item.tagId)" class="label-icon" />
                            <span>{{getTagContent(item.tagId)}} </span> 
                            <span>{{item.notes}}</span>
                            <span>{{item.amount}} </span>                           
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
import TagD from '@/help/tagd';

@Component({
    components:{Icon, Types}
})
export default class Statistics extends Vue{
    typeSta='-';
    created(){
        this.$store.commit('fetchRecord');
    }    
    get recordList():RecordItem[]{
        return this.$store.state.record.recordCostList
    }
    handleDay(msg:string): string{
        const day = dayjs(msg);
        const now = dayjs();
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
        if(recordList.length === 0){return [{ title:'无', items:[]}]}
        const newRecordList = clone(recordList).sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf() );
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
        return result;
    }
    getIcon(id: number): string{
        return this.$store.state.tag.costList[id-1].name
    }     
    getTagContent(id: number): string{
        return this.$store.state.tag.costList[id-1].tagContent
    }     
    
}
</script>

<style lang="scss" scoped>

</style>