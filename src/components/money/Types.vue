<template>
    <ul class="types">
            <li class="selected">支出</li>
            <li>收入</li>
        </ul> 
</template>

<script lang="ts">
    export default {
       name:'Types' 
    }
</script>

<style lang="scss" scoped>
.types{
    background-color: #d9d9d9;
    display: flex;
    text-align: center;
    font-size: 22px;
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
        &.selected::after{
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background-color: white;
        }
    }
}

</style>