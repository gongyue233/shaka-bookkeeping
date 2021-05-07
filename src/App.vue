<template>
  <div id="app">
    <router-view/>    
  </div>
</template>

<style lang="scss">
@import "~@/assets/commen.scss";
@import '~@/assets/reset.scss';

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;  
}
#app{ 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
  color: #333;
}
</style>
