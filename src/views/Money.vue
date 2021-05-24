<template>
    <Layout class-prefix="money">
        <Types :type.sync="record.type" /> 
        <div class="tag-detail">
        <TagMoneyLi :typeMoney="record.type" 
                :currentTagId.sync="record.tagId" />
        </div>        
        <Notes  
            spanNote="备注" 
            :value.sync="record.notes" />
        <Notes 
            type="date" 
            spanNote="日期" 
            :value.sync="record.createAt" /> 
                 
        <NumPad :amount.sync="record.amount" @submit="saveRecord" />   
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';  
import NumPad from '@/components/money/NumPad.vue';
import Types from '@/components/Types.vue';
import TagMoneyLi from '@/components/money/TagMoneyLi.vue';
import Notes from '@/components/money/Notes.vue';
import {Component} from 'vue-property-decorator';
import RecordItem from '@/help/custom';
import dayjs from 'dayjs';

@Component({
    components:{NumPad, Types, Notes,TagMoneyLi},          
})

export default class Money extends Vue{ 
    record: RecordItem = {
        tagId: 0,notes:'', type: '-',amount: 0 ,createAt: dayjs().format('YYYY-MM-DD')
    };
    inputType = 'datetime-local';
    created():void{
        this.$store.commit('fetchRecord');
        this.$store.commit('fetchTags')
        
    }
    saveRecord():void{    
        this.$store.commit('createNewRecord', this.record) 
        this.$router.push({name:'Statistics'}) //记下一笔账就到统计页面，这样就清空了record
    }    
}
</script>

<style lang="scss">
.money-content{
    display: flex;
    flex-direction: column;
    .tag-detail{
        overflow: auto;
        flex-grow: 2;
    }
}
</style>