<template>
<div>
    <ul>
        <li class="item" 
            v-for="tagNode in tagLi" 
            :key="tagNode.id"
            @click="editLabelTag(tagNode)">
                <Icon :name="tagNode.name" class="label-icon" />
                <span>{{tagNode.tagContent}} </span>                
        </li>
    </ul> 
       
</div>
</template>

<script lang="ts">
import Vue from 'vue';  
import {Component, Prop} from 'vue-property-decorator';
import TagD from '@/help/tagd';
@Component
export default class TagLi extends Vue{
    @Prop()readonly typeLabel!:string;  //Label.vue控制type类型
    get tagLi(){
        if(this.typeLabel==="+"){
            return this.$store.state.tag.earnList
        }else{
            return this.$store.state.tag.costList
        }
    }
    editLabelTag(msg:TagD){
        this.$router.push({name:'Edit', params:{id:JSON.stringify(msg.id), type:this.typeLabel}})
        console.log(msg.id)
        console.log(this.typeLabel)
        this.$store.commit('setCurrentTah',msg)
        // console.log(a)
        // this.$router.push({name:'Edit', params:{tagName:name,type:this.typeLabel}})
    }        
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