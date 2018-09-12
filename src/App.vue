<template>
  <div id="app">
    <h1>
      Welcome!
    </h1>
    <p>
      This is the demo site for the <a href="https://github.com/snipcart/vue-comments-overlay">snipcart-vue-comments-overlay</a> plugin
    </p>
    <h2>Leave a comment by clicking the logos</h2>    
    <img v-comments-enabled="'snipcart-logo'" alt="Snipcart logo" src="./assets/snipcart-logo.png">
    <p class="loves">💚</p>
    <img v-comments-enabled="'vue-logo'" alt="Vue logo" src="./assets/vue-logo.png">
    <p>
      <i>Comments aren't saved anywhere and will be flushed upon reload</i>
    </p>
    <p>
      Made with {code} by <a href="https://snipcart.com">Snipcart</a>
      | <a href="https://twitter.com/snipcart" >Twitter</a>
      | <a href="https://github.com/snipcart">GitHub</a>
      | <a href="https://facebook.com/snipcart">Facebook</a>
    </p>
  </div>
</template>

<style lang="scss">
body{
  background-color: #56585a
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#fff;
  margin-top: 60px;  

  a, a:visited{
    color:#f6e770;
  }

  .loves{
  font-size: 2rem; 
  }
}
</style>
