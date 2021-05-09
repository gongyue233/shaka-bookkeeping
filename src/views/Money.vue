<template>
    <Layout class-prefix="money">
         <NumPad :amount.sync="record.amount" @submit="saveRecord" /> 
         <Types :type.sync="record.type" />
        <Notes @update:value="upNotes"/>
        <Tags :tagSource.sync="tags" @update:selected="upSelectedTags"/> 
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';  
import NumPad from '@/components/money/NumPad.vue';
import Tags from '@/components/money/Tags.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';
import {Component, Watch} from 'vue-property-decorator';


type Record = {
    setTag:string[]
    notes: string
    type: string
    amount: number  //数据类型 Object | string
    createAt?: Date  // 也可以写 类 / 构造函数
    // ? 号代表此数据可以为空
}
@Component({
    components:{NumPad, Tags, Types, Notes}
})

export default class Money extends Vue{
    tags:string[] = ['衣','食','住','行'];
    record: Record = {
        setTag:[],notes:'', type: '+',amount: 0 
    };
    recordList: Record[] = JSON.parse(window.localStorage.getItem('recordlist') || '[]');
    upSelectedTags(tags:string[]){
        this.record.setTag = tags;
    }
    upNotes(notes:string){
        this.record.notes = notes;
    }
    saveRecord(){
        const record2: Record = JSON.parse(JSON.stringify(this.record));
        record2.createAt = new Date();
        //做个副本，record2是新对象
        //每次都push新的record
        this.recordList.push(record2);
    }
    @Watch('recordList')
    onRLChange(){
        window.localStorage.setItem('recordlist', JSON.stringify(this.recordList));
    }
    
   
}
</script>

<style lang="scss">
.money-content{
    display: flex;
    flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>  


</style>