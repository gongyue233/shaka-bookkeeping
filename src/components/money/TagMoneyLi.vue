<template>
    <div>
        <div class="tagLi" v-show="typeMoney==='-'">
            <div class="cost item" v-for="tagNode in tagCost" :key="tagNode.name"
            @click="toggleCost(tagNode.name)" :class="{selected: currentCostTag===tagNode.name}">
                    <Icon :name="tagNode.name" class="label-icon" />
                    <span>{{tagNode.tagcontent}} </span>                
            </div>            
        </div>
        <div v-show="typeMoney==='+'" class="tagLi">
            <div class="earn item" 
                v-for="tagNode in tagEarn" 
                :key="tagNode.name"
                @click="toggleEarn(tagNode.name)"
                :class="{selected: currentEarnTag===tagNode.name}">
                    <Icon :name="tagNode.name" class="label-icon" />
                    <span>{{tagNode.tagcontent}} </span>                
            </div>
        </div>
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
        },
        currentCostTag(){  //被选中的tag从vuex获取
            return this.$store.state.tag.currentCostTag
        },
        currentEarnTag(){
            return this.$store.state.tag.currentEarnTag
        }
    }
})
export default class TagMoneyLi extends Vue{
    @Prop()readonly typeMoney!:string;     

    toggleCost(name:string){        
        this.$store.commit('setCostTag',name)  

    }
    toggleEarn(name:string){
         this.$store.commit('setEarnTag',name)  
    }
}
</script>

<style lang="scss" scoped>
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