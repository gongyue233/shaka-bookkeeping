<template>
    <label class="remark-notes">
            <span>备注</span>
            <input type="text" placeholder="添加备注">
        </label>
</template>

<script>
    export default {
        name:'Notes'
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
        padding: 16px 0;
        background: transparent;
        border: none;
    }
}
</style>