<template>
    <div id="app" :class="[ 'app', { 'app--hideMenu' : !isMenuVisible || !user } ]">
        <template-header
            title="Maghøst - Base de Conhecimento"
            :hideToggle="!user"
            :hideUserDropdown="!user" />

        <template-menu v-if="user" />

        <template-loading v-if="validatingToken" />
        <template-content v-else />

        <template-footer />
    </div>
</template>

<script>
import axios from 'axios'
import { baseApiUrl, userKey } from '@/global'
import { mapState } from 'vuex'

import TemplateHeader from "@/components/template/Header"
import TemplateMenu from "@/components/template/Menu"
import TemplateLoading from "@/components/template/Loading"
import TemplateContent from "@/components/template/Content"
import TemplateFooter from "@/components/template/Footer"

export default {
    name: "App",
    components: {
        TemplateHeader,
        TemplateMenu,
        TemplateLoading,
        TemplateContent,
        TemplateFooter
    },
    computed: mapState(['isMenuVisible', 'user']),
    data: function() {
        return {
            validatingToken: true
        }
    },
    created() {
        this.validateToken()
    },
    methods: {
        async validateToken() {
            this.validatingToken = true

            const json = localStorage.getItem(userKey)
            const userData = JSON.parse(json)
            this.$store.commit('setUser', null)

            if (!userData) {
                this.validatingToken = false
                this.$router.push({ name: 'auth' })
                return
            }

            const url = `${baseApiUrl}/validateToken`
            const res = await axios.post(url, userData)

            if (res.data) {
                this.$store.commit('setUser', userData)
            } else {
                localStorage.removeItem(userKey)
                this.$router.push({ name: 'auth' })
            }

            this.validatingToken = false
        }
    }
}
</script>

<style>
    * {
        font-family: 'Lato', sans-serif;
    }

    body {
        margin: 0;
    }
</style>

<style lang="scss" scoped>
    .app {
        -webkit-font-smoothing: antialised;
        -moz-osx-font-smoothing: grayscale;

        height: 100vh;
        display: grid;
        grid-template-rows: 60px 1fr 40px;
        grid-template-columns: 300px 1fr;
        grid-template-areas: 
            "header header"
            "menu content"
            "menu footer";

        &--hideMenu {
            grid-template-areas:
                "header header"
                "content content"
                "footer footer";
        }
    }
</style>