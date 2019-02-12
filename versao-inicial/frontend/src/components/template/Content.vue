<template>
    <div class="Content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style lang="scss" scoped>
    .Content {
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
    }
</style>
