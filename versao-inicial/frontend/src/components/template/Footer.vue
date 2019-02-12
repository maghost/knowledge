<template>
    <footer class="Footer"></footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    .Footer {
        grid-area: footer;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10px;
        background: #ddd;
        color: #333;
    }
</style>
