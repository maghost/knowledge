<template>
    <div class="ArticleDetail" v-if="article">
        <page-title
            :main="article.name"
            :sub="article.description"
            icon="fa fa-file-o" />

        <div
            class="ArticleDetail__content"
            v-html="article.content">
        </div>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
import PageTitle from '@/components/template/PageTitle'

export default {
    name: 'ArticleDetail',
    components: { PageTitle },
    data: function() {
        return {
            article: null
        }
    },
    mounted() {
        this.getArticle()
    },
    methods: {
        getArticle() {
            const url = `${baseApiUrl}/articles/${this.$route.params.id}`

            axios(url).then(res => this.article = res.data)
        }
    }
}
</script>

<style lang="scss">
    .ArticleDetail__content {
        background-color: #fff;
        border-radius: 8px;
        padding: 25px;

        pre {
            padding: 20px;
            border-radius: 8px;
            font-style: 1.2rem;
            background-color: #1e1e1e;
            color: #fff;
        }

        img {
            min-width: 100%;
        }

        :last-child {
            margin-bottom: 0;
        }
    }
</style>
