import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import radio from '@/views/elementui/el-radio'
import checkbox from '@/views/elementui/el-checkbox'
import debounce from '@/views/js/debounce'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: '/radio',
            name: 'radio',
            component: radio,
        },
        {
            path: '/checkbox',
            name: 'checkbox',
            component: checkbox,
        },
        {
            path: '/debounce',
            name: 'debounce',
            component: debounce,
        },
    ],
})
