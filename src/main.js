import Vue from 'vue'
import App from './App.vue'
import CommentsOverlay from './plugins/CommentsOverlay'

Vue.use(CommentsOverlay,{
    commenterSelector() {
        return {
            id: 'c740fb21-3c23-4ece-8cad-14f9156e3838',
            fullName: 'Fellow Developer',
            initials: 'FD',
            email: 'fellow.developer@in.some-coffee-shop.com'
        }
    },
})

Vue.config.productionTip = false

new Vue({ render: createElement => createElement(App)}).$mount('#app')
