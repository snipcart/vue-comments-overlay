<template>
  <div id="app">
    <p class="vueconf-callout">We're very excited to sponsor <a href="https://vuetoronto.com">VueConf TO 2018</a>. Come hang out and learn some Vue.js with world-class developers (Nov. 15-16).</p>
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
    <div class="footer">
      <p>
        Made with {code} by <a href="https://snipcart.com">Snipcart</a>
      </p>
      <p>
        <a href="https://twitter.com/snipcart" >Twitter</a>
        | <a href="https://github.com/snipcart">GitHub</a>
        | <a href="https://facebook.com/snipcart">Facebook</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
$yellow: #f6e770;
$gray: #56585a;
$dark: #2c2e31;

body {
  background-color: $gray;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;

  a,
  a:visited {
    color: $yellow;
  }

  .vueconf-callout {
    margin: auto;
    display: inline-block;
    padding: 1.5rem;
    background-color: $dark;
  }

  .loves {
    font-size: 3rem;
  }

  .footer{
    margin-top: 3rem;
  }
}
</style>
