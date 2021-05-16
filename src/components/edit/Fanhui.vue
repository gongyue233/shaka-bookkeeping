<template>
    <div class="back">
            <div @click="editback">
            <Icon :name="'fanhuijiantou'" class="edit-icon"/>
            </div>
            <span>{{this.headText}}</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';  
import Icon from '@/components/Icon.vue';
import {Component, Prop} from 'vue-property-decorator';

@Component({
    components:{Icon}
})
export default class Fanhui extends Vue{
    @Prop({required:true}) readonly headText!:string;
    editback():void{
        this.$router.back()
    }
       
}
</script>

<style lang="scss" scoped>
@import '~@/assets/commen.scss';

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
</style>