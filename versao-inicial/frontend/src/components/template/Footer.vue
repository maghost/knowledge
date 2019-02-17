<template>
    <footer class="Footer">
        <span>Copyright <strong>Maghøst</strong> &copy; 2019</span>
    </footer>
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
