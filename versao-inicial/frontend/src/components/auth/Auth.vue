<template>
    <div class="Auth">
        <div class="Auth__content">
            <div class="AuthModal">
                <img src="@/assets/logo.png" width="200" alt="Logo">
                <hr>

                <div class="Auth__title">{{ showSignup ? 'Cadastro' : 'Login' }}</div>

                <input v-if="showSignup" v-model="user.name" type="text" name="name" placeholder="Nome">
                <input v-model="user.email" type="email" name="email" placeholder="E-mail">
                <input v-model="user.password" type="password" name="password" placeholder="Senha">
                <input v-if="showSignup" v-model="user.confirmPassword" type="password" placeholder="Confirme a senha">

                <button v-if="showSignup" @click="signup">Registrar</button>
                <button v-else @click="signin">Entrar</button>

                <a href @click.prevent="showSignup = !showSignup">
                    <span v-if="showSignup">Já tem cadastro? Acesse o login</span>
                    <span v-else>Não tem cadastro? Registre-se aqui!</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from '@/global'
import axios from 'axios'

export default {
    name: 'Auth',
    data: function() {
        return {
            showSignup: false,
            user: {}
        }
    },
    methods: {
        signin() {
            const url = `${baseApiUrl}/signin`

            axios.post(url, this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({ path: '/' })
                })
                .catch(showError)
        },
        
        signup() {
            const url = `${baseApiUrl}/signup`

            axios.post(url, this.user)
                .then(res => {
                    this.$toasted.global.success()
                    this.user = {}
                    this.showSignup = false
                })
                .catch(showError)
        }
    }
}
</script>

<style lang="scss" scoped>
    .Auth {
        height: 100%;
    }

    .Auth__content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .AuthModal {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        width: 350px;
        padding: 35px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

        input {
            border: 1px solid #bbbbbb;
            width: 100%;
            margin-bottom: 15px;
            padding: 3px 8px;
            outline: none;
        }

        button {
            align-self: flex-end;
            background-color: #2460ae;
            color: #fff;
            padding: 5px 15px;
            outline: none;
            border: 0;
            border-radius: 2px;
            cursor: pointer;

            &:hover {
                background-color: lighten(#2460ae, 6%);
            }
        }

        a {
            margin-top: 35px;
        }

        hr {
            border: 0;
            width: 100%;
            height: 1px;
            background-image: linear-gradient(to right,
                rgba(120, 120, 120, 0),
                rgba(120, 120, 120, 0.75),
                rgba(120, 120, 120, 0));
        }
    }

    .Auth__title {
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 15px;
    }
</style>

