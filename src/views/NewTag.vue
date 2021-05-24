<template>
    <div class="newTag">
        <Fanhui :headText="'添加分类'" />
        <input v-model="tagNewTag.tagContent" placeholder="请输入标签名">
        <div class="tagArea">
            <IcLi 
            :typeEdit="typeNT"
            :currentTag.sync="tagNewTag.name"         
             class="eidtTagli" />
        </div>        
        <ConButton @click="creatNT" :buttonText="'保存'" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';  
import ConButton from '@/components/ConButton.vue';
import IcLi from '@/components/IcLi.vue';  
import Fanhui from '@/components/edit/Fanhui.vue';
import {Component} from 'vue-property-decorator';

@Component({
    components:{IcLi,ConButton,Fanhui},    
})
export default class NewTag extends Vue{ 
    typeNT: string = this.$route.params.typeNewTag;
    tagNewTag = {  
        type:'-',       
        name:'', 
        tagContent:''
    }; 
    created():void{  
        this.tagNewTag.type = this.typeNT;   
        if(this.typeNT){
            if(this.typeNT==="+"){
                this.tagNewTag.name = 'qitashouru';  //根据类型设置初始图标
            }else{
                this.tagNewTag.name='canyin';
            }
        }else{
            this.$router.push({name:'404'})
        }       
    }
    creatNT():void{
        this.$store.commit('createNewTag', this.tagNewTag);   
        this.$router.back()     
    }    
}
</script>

<style lang="scss" scoped>
.newTag{    
    input{
        margin-top: 10px;
        font-size: 22px;
        background-color: #f5f5f5;
        padding: 4px 16px;
        text-align: left;
        width: 100vw;
        border: none;
    }
    .tagArea{
        padding-top: 30px;
    }
    
}
</style>