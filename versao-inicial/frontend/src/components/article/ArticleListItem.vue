<template>
    <div class="ArticleListItem">
        <router-link
            :to="{ name: 'articleDetail', params: { id: article.id } }"
            class="ArticleListItem__link">
            <div class="ArticleListItem__image d-none d-sm-block">
                <img v-if="article.imageUrl"
                    :src="article.imageUrl"
                    alt="Article">
                <img v-else
                    src="@/assets/article.png"
                    alt="Article">
            </div>

            <div class="ArticleListItem__info">
                <h2 class="ArticleListItem__title">{{ article.name }}</h2>
                <p class="ArticleListItem__description">{{ article.description }}</p>
                <span class="ArticleListItem__author">
                    <strong>Autor:</strong> {{ article.author }}
                </span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ArticleListItem',
    props: {
        article: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .ArticleListItem {
        border-radius: 8px;
        margin-bottom: 20px;
        background-color: #fff;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }

    .ArticleListItem__link {
        display: flex;
        align-items: flex-start;
        text-decoration: none;
        color: #000;
    }

    .ArticleListItem__info {
        display: flex;
        flex-direction: column;
        align-self: stretch;
    }

    .ArticleListItem__image {
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid #aaaaaa;

        img {
            width: 150px;
            height: 150px;
        }
    }

    .ArticleListItem__title {
        font-size: 1.5rem;
    }

    .ArticleListItem__description {
        flex: 1;
        color: #555555;
        font-style: 1.1rem;
    }
</style>
