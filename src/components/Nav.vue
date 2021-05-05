<template>
    <div class="nav">
        <router-link to="/money" class="item" active-class="selected">
            <Icon name="money" />
        记账 
        </router-link>
        <router-link to="/labels" class="item" active-class="selected"> 
            <Icon name="label" />
            标签
         </router-link>
        <router-link to="/statistics" class="item" active-class="selected"> 
            <Icon name="statistics" />
            统计 
        </router-link>
    </div>
</template>

<script lang="ts">
export default {
    name:'Nav',
}
</script>

<style lang="scss" scoped>
.nav{
    padding: 4px 0;
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    flex-direction: row;
    .item{
        width: 33.33%;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        color: black;
    }
    .item.selected{
        color: #1296db;
    }
}
</style>