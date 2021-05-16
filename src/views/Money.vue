<template>
    <Layout class-prefix="money">
        <Types :type.sync="record.type" /> 
        <div class="tag-detail">
        <TagMoneyLi :typeMoney="record.type" 
                @update:tagNode="upTagNode" />
        </div>        
        <Notes @update:value="upNotes"/>
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
import TagD from '@/help/tagd';

@Component({
    components:{NumPad, Types, Notes,TagMoneyLi},          
})

export default class Money extends Vue{    
    record: RecordItem = {
        tagId:-1 ,setTag:'',tagContent:'',notes:'', type: '-',amount: 0 
    };
    created():void{
        this.$store.commit('fetchRecord');
        this.$store.commit('fetchTags')
    }
    upNotes(notes:string):void{
        this.record.notes = notes;
    }
    upTagNode(msg:TagD):void{  
        this.record.tagContent = msg.tagContent;
        this.record.setTag = msg.name;  
        this.record.tagId = msg.id
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