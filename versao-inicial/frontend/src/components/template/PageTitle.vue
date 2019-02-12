<template>
    <div class="PageTitle">
        <h1 class="PageTitle__title"><i v-if="icon" :class="icon"></i> {{ main }}</h1>
        <h2 class="PageTitle__subtitle">{{ sub }}</h2>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        icon: {
            type: String,
            required: true
        },
        main: {
            type: String,
            required: true
        },
        sub: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
    .PageTitle__title {
        margin: 0;
    }

    .PageTitle__subtitle {
        color: #777777;
        margin-top: 5px;
        font-style: 1.3rem;
    }
</style>
