<template>
    <div class="edit">
        <Fanhui :headText="'编辑分类'" />
        <input v-model="tagEdit.tagContent" placeholder="请输入标签名">
        <div class="tagArea">
            <IcLi 
            :typeEdit="type"
            :currentTag.sync="tagEdit.name"         
             class="eidtTagli" />
        </div>        
        <ConButton @click="editOk" :buttonText="'保存'" />
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
export default class Edit extends Vue{ 
    type:string = this.$route.params.type;
    tagEdit = {         
        name:'', 
        tagContent:''
    };  
    created():void{
        this.$store.commit('fetchCurrentTag'); 
        //是通过vuex的currentTag得知当前正在被编辑的标签信息
        const currentTag = this.$store.state.tag.currentTag;
        if (!currentTag) {
            this.$router.replace('/404');
        }        
        this.tagEdit.tagContent = currentTag.tagContent;
        this.tagEdit.name =currentTag.name;
    }  
    editOk():void{   
        this.$store.commit('updateTag',this.tagEdit)
        this.$router.back()
    }
    editback():void{
        this.$router.back()        
    }   
    editDe():void{
        this.$store.commit('deleteTag');
    }
}
</script>
<style lang="scss" scoped>
.edit{
    position: relative;
    height: 100vh;    
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