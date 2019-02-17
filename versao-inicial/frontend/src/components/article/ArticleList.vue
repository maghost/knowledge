<template>
    <div class="ArticleList" v-if="category">
        <page-title
            :main="category.name"
            icon="fa fa-folder-o"
            sub="Categoria" />

        <ul class="ArticleList__list">
            <li v-for="article in articles" :key="article.id">
                <article-item :article="article" />
            </li>
        </ul>

        <div class="ArticleList__loadMore">
            <button v-if="loadMore"
                class="btn btn-lg btn-outline-primary"
                @click="getArticles">Carregar mais artigos</button>
        </div>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
import PageTitle from '@/components/template/PageTitle'
import ArticleItem from '@/components/article/ArticleItem'

export default {
    name: 'ArticleList',
    components: {
        PageTitle,
        ArticleItem
    },
    data: function() {
        return {
            category: null,
            articles: [],
            page: 1,
            loadMore: true
        }
    },
    watch: {
        $route() {
            // Resetar data
            Object.assign(this.$data, this.$options.data())

            this.getCategory()
            this.getArticles()
        }
    },
    mounted() {
        this.getCategory()
        this.getArticles()
    },
    methods: {
        getCategory() {
            const categoryId = this.$route.params.id
            const url = `${baseApiUrl}/categories/${categoryId}`

            axios(url).then(res => this.category = res.data)
        },
        getArticles() {
            const categoryId = this.$route.params.id
            const url = `${baseApiUrl}/categories/${categoryId}/articles?page=${this.page}`

            axios(url).then(res => {
                this.articles = this.articles.concat(res.data)
                this.page++

                if (res.data.length === 0) {
                    this.loadMore = false
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .ArticleList__list {
        list-style-type: none;
        padding: 0;
    }

    .ArticleList__loadMore {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 25px;
    }
</style>
