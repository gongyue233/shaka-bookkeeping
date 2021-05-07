<template>
    <div class="tags">
        <div class="new-tag"><button>新增标签</button></div> 
            <ul class="tag">
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ul>
            
        </div> 
</template>

<script lang="ts">
    export default {
        name:'Tags'
    }
</script>

<style lang="scss" scoped>

.tags{
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    border: 1px solid red;
    font-size: 14px;
    padding: 16px;
    .tag{
        display: flex;
        > li{
            background-color: #d9d9d9;
            height: 24px;
            line-height: 24px;
            padding: 0 16px;
            margin-right: 12px;
            border-radius: (24px/2);
        }
    }
    > .new-tag{
            padding-top: 16px;
        > button{
            background: transparent;
            border: none;
            border-bottom: 1px solid;
            color: #999;
            padding: 0 4px;
        }
    }
}
</style>