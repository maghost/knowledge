<template>
    <div class="PageTitle">
        <h1 class="PageTitle__main"><i v-if="icon" :class="icon"></i> {{ main }}</h1>
        <h2 class="PageTitle__sub">{{ sub }}</h2>
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
    .PageTitle__main {
        margin: 0;
        font-size: 2rem;
    }

    .PageTitle__sub {
        color: #777777;
        margin-top: 5px;
        font-size: 1.3rem;
    }
</style>
