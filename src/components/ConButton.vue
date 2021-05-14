<template>
    <div class="newTag">
            <button class="newTag-bt" @click="$emit('click')">新建标签</button>
    </div>
</template>

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