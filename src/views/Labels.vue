<template>
    <Layout class-prefix="labels">
        <Types :type.sync="type" />  
        <TagLi :type="type" />
        <div class="newTag">
            <button class="newTag-bt" @click="createTag">新建标签</button>
        </div>
        <ul>
            <li v-for="tag in tags" :key="tag">{{tag}} </li>
        </ul>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';  
import {Component} from 'vue-property-decorator';
import Types from '@/components/money/Types.vue';
import TagLi from '@/components/label/TagLi.vue';
import tagListModel from '@/models/tagListModel';

tagListModel.fetch();


@Component({
    components:{Types, TagLi}
})


export default class Labels extends Vue{
    type = '-'; // type类型由外部的Label.vue控制
    tags = tagListModel.tagList;
    
    createTag(){
        const name = window.prompt('请输入新增的标签名字')
        if(name){
            const message = tagListModel.create(name);
            alert(message)
        }
    }
}
</script>

<style lang="scss">
@import "~@/assets/commen.scss";

.labels-content{
    background-color: $color-back-q;
}
</style>
<style lang="scss" scoped>
  
.newTag{
    text-align: center;    
    > .newTag-bt{
        margin-top: 8px;
        background-color: #1296db;
        color: white;
        border-radius: 4px;
        padding: 6px 16px;
        border: none;
    }
}
</style>