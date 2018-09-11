import Vue from 'vue'
import App from './App.vue'
import CommentsOverlay from './plugins/CommentsOverlay'

Vue.use(CommentsOverlay)

Vue.config.productionTip = false

new Vue({ render: createElement => createElement(App)}).$mount('#app')
