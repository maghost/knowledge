import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticleList from '@/components/article/ArticleList'
import ArticleDetail from '@/components/article/ArticleDetail'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
},
{
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
},
{
    name: 'articleList',
    path: '/categories/:id/articles',
    component: ArticleList
},
{
    name: 'articleDetail',
    path: '/articles/:id',
    component: ArticleDetail
}]

export default new VueRouter({
    mode: 'history',
    routes
})