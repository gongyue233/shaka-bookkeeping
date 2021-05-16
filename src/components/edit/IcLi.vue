<template>
    <div>
         <div class="tagLi">
            <div class="item" 
                v-for="tagNode in tagList" 
                :key="tagNode.name"
                @click="toggle(tagNode.name)"
                :class="[{'selected': currentTag===tagNode.name},classType]" 
                >
                    <Icon :name="tagNode.name" class="label-icon" />   
            </div>
        </div>
    </div> 
</template>

<script lang="ts">
import Vue from 'vue';  
import {Component, Prop} from 'vue-property-decorator';
import IconD from "@/help/icon";

@Component
export default class TagMoneyLi extends Vue{    
    @Prop({required:true})readonly typeEdit!:string;
    @Prop()readonly currentTag!:string;   
    classType = 'cost';     
    get tagList():IconD[]{ 
        if(this.typeEdit){            
            if(this.typeEdit === "-"){
            this.classType = "cost";  //支出时，classType值为cost，元素类名cost 
            return this.$store.state.tag.iconCost
            }else{
            this.classType = "earn"
            return this.$store.state.tag.iconEarn
            }
        }else{            
            alert('没有确认类型');
            return [];
        }        
    }
    toggle(tagContent:string):void{ 
        //向外界传递被选中的图标
        this.$emit('update:currentTag', tagContent)
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/commen.scss";
.tagLi{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-top: 10px;
    .cost.selected{
        .label-icon{
            color: #1296db;
        }
    }
    .earn.selected{
        .label-icon{
            color: red;
        }
    }
    .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px;
        span{
            
            font-size: 16px;
        }
        .label-icon{
            margin-bottom: 8px;
        }
    }
}
</style>