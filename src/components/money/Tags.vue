<template>
    <div class="tags">
        <div class="new-tag">
            <button @click="create">新增标签</button></div> 
            <ul class="tag">
                <li v-for="tag in tagSource" 
                :key="tag" 
                :class="{selected: selectedTags.indexOf(tag) >= 0}"
                @click="toggle(tag)">
                {{tag}}
                </li>               
            </ul>
            
        </div> 
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class Tags extends Vue{
    @Prop() readonly tagSource: string[] | undefined; 
   selectedTags: string[] = [];
   toggle(tag: string){
       const index = this.selectedTags.indexOf(tag);
       if(index >= 0){
           this.selectedTags.splice(index, 1);
       }else{
        this.selectedTags.push(tag)
       }
   }
   create(){
       const name = window.prompt('请输入新标签名');
       if(name===''){
           window.alert('标签名不能为空')
       }else{
           if(this.tagSource){
                this.$emit('update:tagSource',[...this.tagSource, name])
           }
       }
   }

}
</script>

<style lang="scss" scoped>

.tags{
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    border: 1px solid red;
    font-size: 14px;
    padding: 16px;
    .tag{
        display: flex;
        > li{
            background-color: #d9d9d9;
            height: 24px;
            line-height: 24px;
            padding: 0 16px;
            margin-right: 12px;
            border-radius: (24px/2);
            &.selected{
                color: white;
                background-color: #1296db;
            }
        }
    }
    > .new-tag{
            padding-top: 16px;
        > button{
            background: transparent;
            border: none;
            border-bottom: 1px solid;
            color: #999;
            padding: 0 4px;
        }
    }
}
</style>