import { createApp } from 'vue'
import App from './App.vue'
import ElContainer from './components/container/index'
import ElButton from './components/Button/index'
const app=createApp(App)
app.config.globalProperties.$AILEMENTE={
    size:'large'
}
app.use(ElContainer).use(ElButton).mount('#app')
