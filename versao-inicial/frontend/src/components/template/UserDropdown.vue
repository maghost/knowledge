<template>
    <div class="UserDropdown">
        <div class="UserDropdown__button">
            <span class="d-none d-sm-block">{{ user.name }}</span>
            <div class="UserDropdown__image">
                <Gravatar :email="user.email" alt="User" />
            </div>
            <i class="fa fa-angle-down"></i>
        </div>
        <div class="UserDropdown__content">
            <router-link to="/admin">
                <i class="fa fa-cogs"></i> Administração
            </router-link>
            <a href>
                <i class="fa fa-sign-out"></i> Sair
            </a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Gravatar from 'vue-gravatar'

export default {
    name: 'UserDropdown',
    components: { Gravatar },
    computed: mapState(['user'])
}
</script>

<style lang="scss" scoped>
    .UserDropdown {
        height: 100%;
        position: relative;

        &:hover {
            background-color: rgba(0, 0, 0, 0.2);

            .UserDropdown__content {
                visibility: visible;
                opacity: 1;
            }
        }
    }

    .UserDropdown__button {
        display: flex;
        align-items: center;
        color: #ffffff;
        font-weight: 100;
        height: 100%;
        padding: 0 20px;
    }

    .UserDropdown__image {
        margin: 0 10px;

        img {
            max-height: 37px;
            border-radius: 5px;
        }
    }

    .UserDropdown__content {
        position: absolute;
        right: 0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
        background-color: #f9f9f9;
        min-width: 170px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        padding: 10px;
        z-index: 1;

        a {
            text-decoration: none;
            color: #000;
            padding: 10px;

            &:hover {
                background-color: #ededed;
            }
        }
    }
</style>
