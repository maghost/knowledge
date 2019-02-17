<template>
    <div class="Loading">
        <img src="@/assets/loading.gif">
    </div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style lang="scss" scoped>
    .Loading {
        grid-area: content;
        background-color: #efefef;
        padding: 20px;
    }
</style>
