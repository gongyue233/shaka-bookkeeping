<template>
    <div class="edit">
        <div class="back">
            <Icon :name="'fanhuijiantou'" class="edit-icon"/>
            <span>编辑标签</span>
        </div>
        <input v-model="tagEdit.tagContent" placeholder="请输入标签名">
        <div class="tagArea">
            <IcLi 
            :currentTag.sync="tagEdit.name" 
            :typeMoney="type" 
             class="eidtTagli"
             />
        </div>
        
        <ConButton @click="editOk"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';  
import ConButton from '@/components/ConButton.vue';
import IcLi from '@/components/edit/IcLi.vue';
import {Component, Prop} from 'vue-property-decorator';
import TagD from '@/help/tagd';

@Component({
    components:{IcLi,ConButton}, 
})
export default class Edit extends Vue{
    tagEdit:TagD = {  //拷贝到vuex的当前的tag信息
        id:this.$store.state.tag.currentTag.id, 
        name:this.$store.state.tag.currentTag.name, 
        tagContent:''
    };    
    type:string = this.$route.params.type;
    editOk(){ 
        console.log('没有传入参数')
        console.log(this.tagEdit)
        console.log(this.tagEdit.tagContent)
        this.$store.commit('updateTag',this.tagEdit)
    }
       
}
</script>
<style lang="scss" scoped>
@import '~@/assets/commen.scss';
.edit{
    height: 100vh;
    .back{
        @extend %inner-shadow;
        padding-left: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        span{
            font-size: 24px;            
            padding: 3px 0;
            padding-left:40px;
        }        
    }
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
        .eidtTagli ::v-deep .tagLi .item span{
            display: none;
        }
    }
    
}
</style>