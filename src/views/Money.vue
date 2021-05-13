<template>
    <Layout class-prefix="money">
        <Types :type.sync="record.type" /> 
        <div class="tag-detail">
        <Tags :tagSource.sync="tags" @update:selected="upSelectedTags" :typeMoney="record.type"/> 
        </div>
        <Notes @update:value="upNotes"/>
        <NumPad :amount.sync="record.amount" @submit="saveRecord" />   
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';  
import NumPad from '@/components/money/NumPad.vue';
import Tags from '@/components/money/Tags.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';
import {Component, Watch} from 'vue-property-decorator';
import RecordItem from '@/help/custom';
import tagListModel from '@/models/tagListModel';
const tagList = tagListModel.fetch();

@Component({
    components:{NumPad, Tags, Types, Notes},
    
    created(){
        this.$store.commit('fetchRecord')
    }
})

export default class Money extends Vue{
    tags = tagList;
    record: RecordItem = {
        setTag:[],notes:'', type: '-',amount: 0, tagName:''
    };  
    upSelectedTags(tags:string[]){
        this.record.setTag = tags;
    }
    upNotes(notes:string){
        this.record.notes = notes;
    }
    saveRecord(){    
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
    }
}
</style>