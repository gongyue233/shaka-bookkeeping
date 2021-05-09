<template>
    <div class="numberPad">
            <div class="output">{{output}}</div>
            <div class="buttons">
                <button @click="countContent">1</button>
                <button @click="countContent">2</button>
                <button @click="countContent">3</button>
                <button @click="remove">删除</button>
                <button @click="countContent">4</button>
                <button @click="countContent">5</button>
                <button @click="countContent">6</button>
                <button @click="clear">清零</button>
                <button @click="countContent">7</button>
                <button @click="countContent">8</button>
                <button @click="countContent">9</button>
                <button class="ok" @click="okAmount">确定</button>
                <button class="zero" @click="countContent">0</button>
                <button @click="countContent">.</button>
            </div>
        </div> 
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class NumberPad extends Vue{
    @Prop()readonly amount!:number;
    output = this.amount.toString();    
    countContent(event: MouseEvent){
        const button = (event.target as HTMLButtonElement);        
        const input = button.textContent as string;
        if(this.output.length >= 16){return }//计算最大16位
        if(this.output === '0'){
            if ('0123456789'.indexOf(input) >= 0){
                //如果input是‘12456789’中的
                this.output = input;
            }else{ // . 号的情况
                this.output += input
            }
            return;
        }
        if(this.output.indexOf('.') >= 0 && input === '.'){return }
        // 已经有小数点再次输入小数点
        this.output += input;        
    }
    remove(){
        //this.output = this.output.substring(0, this.output.length-1)
        //也可以使用slice
        if(this.output.length === 1){
            this.output = '0';
        }else{
            this.output = this.output.slice(0, -1);
        }
    }
    clear(){
        this.output = '0';
    }
    okAmount(){
        this.$emit('update:amount',  parseFloat(this.output));
        this.$emit('submit', parseFloat(this.output));
        this.clear();
    }
    
}
</script>

<style lang="scss" scoped>
@import '~@/assets/commen.scss';
.numberPad{
    .output{
        @extend %inner-shadow;
        font-size: 32px;
        font-family: Consolas, monospace;
        padding: 8px 16px;
        text-align: right;
        min-height: 64px;
    }
    > .buttons{      
        padding: 6px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 56px 56px 56px 56px;
        gap: 6px 6px;
        > button{
                background-color: #d9d9d9;
                border: none;
            &.ok{
                grid-column: 4 / 5;
                grid-row: 3 / 5;
            }
            &.zero{
                grid-column: 1 / 3;
            }
        }
    }
}
</style>