<template>
    <div class="edit">
        <div class="back">
            <Icon :name="'fanhuijiantou'" class="edit-icon"/>
            <span>编辑标签</span>
        </div>
        <input v-model="editTagContent" placeholder="请输入名">
        <div class="tagArea">
            <TagMoneyLi :currentTag.sync="tagName" 
            :typeMoney="type" 
            @update:tagName="editTagCon" class="eidtTagli" />
        </div>
        <div @click="editOk">保存</div>
        <ConButton/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';  
import TagMoneyLi from '@/components/money/TagMoneyLi.vue';
import ConButton from '@/components/Button.vue';
import {Component, Prop} from 'vue-property-decorator';

@Component({
    components:{TagMoneyLi,ConButton}
})
export default class Edit extends Vue{
    tagName: string = this.$route.params.tagName;
    type:string = this.$route.params.type; 
    editTagContent = '';          
    editTagCon(content:string){
        console.log('sha')
        console.log(this.editTagContent)
        console.log(this.tagName)
    }
    editOk(){
        
        
        console.log(this.editTagContent)
        console.log(this.tagName)
    }
       
}
</script>
<style lang="scss" scoped>
@import '~@/assets/commen.scss';
.edit{
    height: 100vh;
    .back{
        @extend %inner-shadow;
        padding-left: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        span{
            font-size: 24px;
            
            padding: 3px 0;
            padding-left:40px;
        }        
    }
    input{
        margin-top: 10px;
        font-size: 30px;
        background-color: #f5f5f5;
        padding: 4px 16px;
        text-align: left;
        width: 100vw;
        border: none;
    }
    .tagArea{
        padding-top: 30px;
        .eidtTagli ::v-deep .tagLi .item span{
            display: none;
        }
    }
    
}
</style>