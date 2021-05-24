<template>
    <label class="remark-notes">
            <span>{{spanNote}} </span>
            <template v-if="type==='date'">
                <input :type="type" 
                    :value="value"
                    @input="onNoteChanged($event.target.value)">
            </template>
             <template v-else>
                <input 
                    :type="type || 'text'" 
                    placeholder="添加备注" 
                    :value="value"
                    @input="onNoteChanged($event.target.value)">
            </template>
    </label>
</template>

<script lang="ts">
import Vue from 'vue';
import dayjs from 'dayjs';

import {Component, Prop} from 'vue-property-decorator';
@Component
export default class Notes extends Vue{
    @Prop()readonly type?:string ;
    @Prop()readonly spanNote!:string;
    @Prop()readonly value!:string;
    
    onNoteChanged(value: string):void{
        this.$emit('update:value', value);
    }

}
</script>


<style lang="scss" scoped>
.remark-notes{
    font-size: 14px;
    display: block;
    background: #f5f5f5;
    padding-left: 16px;
    display: flex;
    align-items: center;
    span{
        padding-right: 16px;
    }
    input{
        flex-grow: 1;
        padding: 14px 0;
        background: transparent;
        border: none;
    }
}
</style>