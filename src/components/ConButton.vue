<template>
    <div class="newTag">
            <button class="newTag-bt" @click="$emit('click')">{{this.buttonText}} </button>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';
@Component
export default class ConButton extends Vue{
    @Prop()readonly buttonText!:string;
}
</script>

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