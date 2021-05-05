<template>
  <div id="app">
    <router-view/>    
  </div>
</template>

<style lang="scss">
@import "~@/assets/commen.scss";
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a{
  text-decoration: none;  
}
#app{ 
  line-height: 1.5;
  font-family: $font-hei;
  color: #333;
  border: 1px solid red;
}
</style>
