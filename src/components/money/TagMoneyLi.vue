<template>
    <div>
         <div class="tagLi">
            <div class="item" 
                v-for="tagNode in tagList" 
                :key="tagNode.id"
                @click="toggle(tagNode.id)"
                :class="[{'selected': currentTagId===tagNode.id}, classType]"                 >
                    <Icon :name="tagNode.name" class="label-icon" />
                    <span>{{tagNode.tagContent}} </span>                
            </div>
        </div>
    </div> 
</template>

<script lang="ts">
import TagD from '@/help/tagd';
import clone from '@/lib/clone';
import Vue from 'vue';  
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class TagMoneyLi extends Vue{
    @Prop()readonly typeMoney!:string; 
    @Prop()readonly currentTagId!:number;
    classType!:string;      //classType，指不同type对应的tag类名
    get tagList():TagD[]{ 
        if(this.typeMoney!=='-' && this.typeMoney!=='+'){
            alert('请确定是支出还是收入类型？')
            return [];            
        }else{
            if(this.typeMoney==='-'){
                this.classType = "cost";
            }else{
                this.classType = "earn";
            }        
            const tagList = clone(this.$store.state.tag.tagList)
                            .filter((r: TagD)=>r.type===this.typeMoney);
            this.$emit('update:currentTagId', tagList[0].id)
            return tagList;                   
        }        
    }
    toggle(msg:number):void{ 
        this.$emit('update:currentTagId', msg)     
    }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/commen.scss';
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
            @extend %text;
            font-size: 16px;
        }
        .label-icon{
            margin-bottom: 8px;
        }
    }
}
</style>