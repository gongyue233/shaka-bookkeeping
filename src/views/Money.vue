<template>
    <Layout>
        <ul class="tags">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
        <div class="new-tag">新增标签</div> 
        <div class="remark">
            <label class="remark-notes">
                <span>备注</span>
                <input type="text">
            </label>            
        </div>
        <div class="types">
            <li class="selected">支出</li>
            <li>收入</li>
        </div>
        <div class="numberPad">
            <div class="output">100</div>
            <div class="buttons">
                
            </div>
        </div>       
    </Layout>
</template>

<script lang="ts">
export default {
    name:'Money',
}
</script>

<style lang="scss" scoped>
</style>