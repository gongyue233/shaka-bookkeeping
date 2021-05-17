<template>
    <Layout>
        <Types :type.sync="typeSta"/> 
        <div>
            <ol>
                <!-- <li v-for="(group, index) in result" :key="index">
                    <ol>
                        <li v-for="item in group" :key="item.createAt">
                            {{item.amount}}
                        </li>
                    </ol>
                </li> -->
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
    // get result(){
    //    //const {recordList} = this;//省的需要每次输this.recordList
    //     type HashTableSta = {title:string, items:RecordItem[]};
    //     const hashTableSta: { [key:string]: HashTableSta}};
    //     // for(let i = 0; i < this.recordList.length; i++){  
    //     //     const [date, time] = this.recordList[i].createAt.split('T')
    //     //     // 将ISO时间从T出分成两个部分，[date ,time]就是指这个时间的前后两部分分别定义成date和time            
    //     // }
    //     return hashTableSta;
    // }

       
}
</script>

<style lang="scss" scoped>

</style>