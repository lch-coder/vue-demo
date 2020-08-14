import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import radio from '@/views/elementui/el-radio'
import checkbox from '@/views/elementui/el-checkbox'
import table from '@/views/elementui/el-table'
import debounce from '@/views/js/debounce'
import father from '@/views/index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
        },

        {
            path: '/father',
            name: 'father',
            component: father,
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
            path: '/table',
            name: 'table',
            component: table,
        },
        {
            path: '/debounce',
            name: 'debounce',
            component: debounce,
        },
    ],
})
