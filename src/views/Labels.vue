<template>
    <Layout class-prefix="labels">
        <Types :type.sync="type" /> 
        <div class="tagArea">
        <TagLi :typeLabel="type" />
        </div> 
        <ConButton @click="createNewTag" :buttonText="'新建标签'" />
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue';  
import {Component} from 'vue-property-decorator';
import Types from '@/components/Types.vue';
import TagLi from '@/components/label/TagLi.vue';
import ConButton from '@/components/ConButton.vue';


@Component({
    components:{Types, TagLi,ConButton},    
})

export default class Labels extends Vue{
    type = '-'; 
    created():void{
        this.$store.commit('fetchTags');
    }
    createNewTag():void{
        this.$router.push({name:'NewTag', params:{typeNewTag: this.type}})
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
    max-height: 80%;
    overflow: auto;
} 
</style>