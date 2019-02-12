<template>
    <header class="Header">
        <a class="Header__toggle" @click="toggleMenu" v-if="!hideToggle">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="Header__title">
            <router-link to="/">{{ title }}</router-link>
        </h1>
        <UserDropdown v-if="!hideUserDropdown" />
    </header>
</template>

<script>
import UserDropdown from '@/components/template/UserDropdown'

export default {
    name: 'Header',
    components: { UserDropdown },
    props: {
        title: {
            type: String,
            required: true
        },
        hideToggle: {
            type: Boolean,
            required: true
        },
        hideUserDropdown: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        icon() {
            return this.$store.state.isMenuVisible ? "fa-angle-left" : "fa-angle-down"
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style lang="scss" scoped>
    .Header {
        grid-area: header;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, #1e469a, #49a7c1);
    }

    .Header__title {
        font-size: 1.2rem;
        color: #ffffff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;

        a {
            color: #ffffff;
            text-decoration: none;
        }
    }

    .Header__toggle {
        width: 60px;
        height: 100%;
        display: flex;
        justify-self: flex-start;
        justify-content: center;
        align-items: center;
        color: #ffffff !important;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background-color: rgba(0, 0, 0, 0.2);
        }
    }
</style>
