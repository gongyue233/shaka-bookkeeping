<template>
    <Layout class-prefix="labels">
        <Types :type.sync="type" /> 
        <div class="tagArea">
        <TagLi :typeLabel="type" />
        </div> 
        <ConButton />
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';  
import {Component} from 'vue-property-decorator';
import Types from '@/components/Types.vue';
import TagLi from '@/components/label/TagLi.vue';
import tagListModel from '@/models/tagListModel';
import ConButton from '@/components/Button.vue';

tagListModel.fetch();

@Component({
    components:{Types, TagLi,ConButton}
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
.tagArea{
    overflow: auto;
} 
</style>