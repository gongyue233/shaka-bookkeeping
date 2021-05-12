<template>
    <ul class="types">
            <li :class="type==='-' && 'selected'" @click="selectType('-')">支出</li>
            <li :class="type==='+' && 'selected'" @click="selectType('+')">收入</li>
        </ul> 
</template>
<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class Types extends Vue{ 
    @Prop()readonly type!:string; 
    selectType(type: string){
        if(type!=='-' && type!=='+'){
            throw new Error('type is unknown');           
        }
        this.$emit('update:type', type)
    }
}
</script>

<style lang="scss" scoped>
.types{
    background-color: #d9d9d9;
    display: flex;
    text-align: center;
    font-size: 18px;
    > li{
        width: 50%;
        padding: 8px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &.selected{
            color: white;
            background-color: #1296db;
        }
    }
}

</style>