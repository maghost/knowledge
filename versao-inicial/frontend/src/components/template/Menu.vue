<template>
    <aside class="Menu" v-show="isMenuVisible"></aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible'])
}
</script>

<style lang="scss" scoped>
    .Menu {
        grid-area: menu;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background: linear-gradient(to right, #232526, #414345);
    }
</style>
