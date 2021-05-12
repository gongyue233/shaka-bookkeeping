<template>
    <Layout class-prefix="money">
         <NumPad :amount.sync="record.amount" @submit="saveRecord" />          
        <Notes @update:value="upNotes"/>
        <Tags :tagSource.sync="tags" @update:selected="upSelectedTags"/> 
        <Types :type.sync="record.type" />
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';  
import NumPad from '@/components/money/NumPad.vue';
import Tags from '@/components/money/Tags.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordLiModel';
import RecordItem from '@/custom';
import tagListModel from '@/models/tagListModel';



const tagList = tagListModel.fetch();
@Component({
    components:{NumPad, Tags, Types, Notes}
})

export default class Money extends Vue{
    tags = tagList;
    record: RecordItem = {
        setTag:[],notes:'', type: '-',amount: 0 
    };
    recordList: RecordItem[] = recordListModel.fetch();
    upSelectedTags(tags:string[]){
        this.record.setTag = tags;
    }
    upNotes(notes:string){
        this.record.notes = notes;
    }
    saveRecord(){
        const record2 = recordListModel.clone(this.record);
        record2.createAt = new Date();
        //做个副本，record2是新对象
        //每次都push新的record
        this.recordList.push(record2);
    }
    @Watch('recordList')
    onRLChange(){
        recordListModel.save(this.recordList);
    }
    
   
}
</script>

<style lang="scss">
.money-content{
    display: flex;
    flex-direction: column-reverse;
}
</style>