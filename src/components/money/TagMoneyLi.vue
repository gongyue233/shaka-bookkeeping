<template>
    <div>
         <div class="tagLi">
            <div class="item" 
                v-for="tagNode in tagList" 
                :key="tagNode.name"
                @click="toggle(tagNode)"
                :class="[{'selected': currentTag===tagNode.name},classType]" 
                >
                    <Icon :name="tagNode.name" class="label-icon" />
                    <span>{{tagNode.tagcontent}} </span>                
            </div>
        </div>
    </div> 
</template>

<script lang="ts">
import Vue from 'vue';  
import {Component, Prop, Watch} from 'vue-property-decorator';

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
    },
})
export default class TagMoneyLi extends Vue{
    @Prop()readonly typeMoney!:string; 
    @Prop()readonly currentTag?:string; 
    classType = 'cost';      //classType，指不同type对应的tag类名
    get tagList(){ 
        if(this.typeMoney === "-"){
            this.classType = "cost";  //支出时，classType值为cost，元素类名cost 
            return this.$store.state.tag.costList
        }else{
            this.classType = "earn"
            return this.$store.state.tag.earnList
        }
    }
    toggle(obj:{name:string, tagcontent: string}){
        this.$emit('update:currentTag', obj.name)
        this.$emit('update:tagName',obj.tagcontent)  
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