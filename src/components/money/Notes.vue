<template>
    <label class="remark-notes">
            <span>备注</span>
            <input type="text" placeholder="添加备注" v-model="note">
        </label>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Emit, Watch} from 'vue-property-decorator';
@Component
export default class Notes extends Vue{
   note = '';
   @Watch('note')
   onNoteChanged(note: string){
       this.$emit('update:value', note)
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