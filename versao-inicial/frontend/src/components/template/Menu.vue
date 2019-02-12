<template>
    <aside class="Menu"></aside>
</template>

<script>
export default {
    name: 'Menu'
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
