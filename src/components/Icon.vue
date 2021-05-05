
<template>
    <svg class="icon">
        <use :xlink:href="'#'+name" />
    </svg>
</template>

<script lang="ts">

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext); //这里ts语言不认识requireContext，需要明确其类型
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (err) {
  console.log(err);
}
export default {
    props:['name'],
    name:'Icon',
}
</script>

<style lang="scss" scoped>
.icon {
       width: 30px; height: 30px;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>