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
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        padding: 20px;
    }
</style>
