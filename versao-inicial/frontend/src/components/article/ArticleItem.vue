<template>
    <div class="ArticleItem">
        <router-link
            :to="{ name: 'articleDetail', params: { id: article.id } }"
            class="ArticleItem__link">
            <div class="ArticleItem__image d-none d-sm-block">
                <img v-if="article.imageUrl"
                    :src="article.imageUrl"
                    alt="Article">
                <img v-else
                    src="@/assets/article.png"
                    alt="Article">
            </div>

            <div class="ArticleItem__info">
                <h2 class="ArticleItem__title">{{ article.name }}</h2>
                <p class="ArticleItem__description">{{ article.description }}</p>
                <span class="ArticleItem__author">
                    <strong>Autor:</strong> {{ article.author }}
                </span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ArticleItem',
    props: {
        article: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .ArticleItem {
        border-radius: 8px;
        margin-bottom: 20px;
        background-color: #fff;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }

    .ArticleItem__link {
        display: flex;
        align-items: flex-start;
        text-decoration: none;
        color: #000;
    }

    .ArticleItem__info {
        display: flex;
        flex-direction: column;
        align-self: stretch;
    }

    .ArticleItem__image {
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid #aaaaaa;

        img {
            width: 150px;
            height: 150px;
        }
    }

    .ArticleItem__title {
        font-size: 1.5rem;
    }

    .ArticleItem__description {
        flex: 1;
        color: #555555;
        font-style: 1.1rem;
    }
</style>
