<template>
<div>
    <ul v-show="type==='-'">
        <li class="tag item" v-for="tagNode in tagCost" :key="tagNode.name">
                <Icon :name="tagNode.name" class="label-icon" />
                <span>{{tagNode.tagcontent}} </span>                
        </li>
         
    </ul>
    <ul v-show="type==='+'">
        <li class="tag item" v-for="tagNode in tagEarn" :key="tagNode.name">
                <Icon :name="tagNode.name" class="label-icon" />
                <span>{{tagNode.tagcontent}} </span>                
        </li>
    </ul>
</div>
</template>

<script lang="ts">
import Vue from 'vue';  
import {Component, Prop} from 'vue-property-decorator';

@Component({
    computed:{
        tagCost(){
            return this.$store.state.tag.costList
        },
        tagEarn(){
            return this.$store.state.tag.earnList
        }
    }
})
export default class TagLi extends Vue{
    //标签页的图标分成支出costList和收入earnList，接受外部参数type来决定显示
    @Prop()readonly type!:string;         
}
</script>

<style lang="scss" scoped>
ul{
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
}

</style>