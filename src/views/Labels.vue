<template>
    <Layout class-prefix="labels">
        <Types :type.sync="type" /> 
        <div class="tagArea">
        <TagLi :typeLabel="type" />
        </div> 
        <ConButton @click="ups" />
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
    created(){
        this.$store.commit('fetchTags')
    }
})

export default class Labels extends Vue{
    type = '-'; 
    ups(){
        console.log('sh')
        
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