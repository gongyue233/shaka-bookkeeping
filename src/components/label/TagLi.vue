<template>
    <ul>
        <li class="tag item" v-for="tagNode in tagHashMap" :key="tagNode.name">
                <Icon :name="tagNode.name" class="label-icon" />
                <span>{{tagNode.tagcontent}} </span>                
        </li>
    </ul>
</template>

<script lang="ts">
import Vue from 'vue';  
import {Component, Watch} from 'vue-property-decorator';

@Component
export default class TagLi extends Vue{
         tagHashMap = [
            {name:'canyin', tagcontent: '餐饮'},
            {name:'shuidianmei', tagcontent: '水电煤'},
            {name:'tongxun', tagcontent: '通讯'},
            {name:'xuexi', tagcontent: '学习'},
            {name:'yiliao', tagcontent: '医疗'},
            {name:'yule', tagcontent: '娱乐'},
            {name:'zhufang', tagcontent: '住房'},
        ];
}
</script>

<style lang="scss" scoped>
li{     
        background-color: white;
        color: #333;
        border: 1px solid #d9d9d9;
        min-height: 44px;
        border-radius: 8px;       
        margin: 10px 12px;
        display: flex;
        align-items: center;
        > span{
            padding: 0 10px;
            font-size: 16px;
        }
        > .label-icon{
            margin-left: 12px;
        }
    }
</style>