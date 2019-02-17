<template>
    <div class="ArticlesByCategory">
        <page-title
            v-if="category.name"
            :main="category.name"
            icon="fa fa-folder-o"
            sub="Categoria" />

        <ul class="ArticleByCategory__list">
            <li v-for="article in articles" :key="article.id">
                {{ article.name }}
            </li>
        </ul>

        <div class="ArticleByCategory__loadMore">
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

export default {
    name: 'ArticlesByCategory',
    components: {
        PageTitle
    },
    data: function() {
        return {
            category: {},
            articles: [],
            page: 1,
            loadMore: true
        }
    },
    mounted() {
        this.category.id = this.$route.params.id
        this.getCategory()
        this.getArticles()
    },
    methods: {
        getCategory() {
            const url = `${baseApiUrl}/categories/${this.category.id}`

            axios(url).then(res => this.category = res.data)
        },
        getArticles() {
            const url = `${baseApiUrl}/categories/${this.category.id}/articles?page=${this.page}`

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
    .ArticleByCategory__list {
        list-style-type: none;
        padding: 0;
    }

    .ArticleByCategory__loadMore {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 25px;
    }
</style>

