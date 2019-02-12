<template>
    <header class="Header"></header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    .Header {
        grid-area: header;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, #1e469a, #49a7c1);
    }
</style>
