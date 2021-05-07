<template>
    <div class="numberPad">
            <div class="output">100</div>
            <div class="buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清零</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button class="ok">确定</button>
                <button class="zero">0</button>
                <button>.</button>
            </div>
        </div> 
</template>

<script lang="ts">
    export default {
        name:'NumPad'
    }
</script>

<style lang="scss" scoped>
@import '~@/assets/commen.scss';
.numberPad{
    .output{
        @extend %inner-shadow;
        font-size: 36px;
        font-family: Consolas, monospace;
        padding: 8px 16px;
        text-align: right;
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