<template>
  <div id="app">
    <h1>
      Welcome!
    </h1>
    <p>
      This is the demo site for snipcart-vue-comments-overlay plugin
    </p>
    <h2>Leave a comment by clicking the logos</h2>    
    <img v-comments-enabled="'snipcart-logo'" alt="Snipcart logo" src="https://snipcart.com/images/logo.png">
    <p class="loves">💚</p>
    <img v-comments-enabled="'vue-logo'" alt="Vue logo" src="./assets/logo.png">
    <p>
      <i>Comments aren't saved anywhere and will be flushed upon reload</i>
    </p>
  </div>
</template>

<style>
body{
  background-color: #56585a
}
.loves{
 font-size: 2rem; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#fff;
  margin-top: 60px;  
}
</style>
