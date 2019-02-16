<template>
    <div class="AdminPages">
        <PageTitle
            icon="fa fa-cogs"
            main="Administração do Sistema"
            sub="Cadastros &amp; Cia" />

        <div class="AdminPages__tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Artigos" active>
                        <article-admin />
                    </b-tab>
                    <b-tab title="Categorias">
                        <category-admin />
                    </b-tab>
                    <b-tab title="Usuários">
                        <user-admin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/template/PageTitle'
import ArticleAdmin from '@/components/admin/ArticleAdmin'
import CategoryAdmin from '@/components/admin/CategoryAdmin'
import UserAdmin from '@/components/admin/UserAdmin'

export default {
    name: 'AdminPages',
    components: {
        PageTitle,
        ArticleAdmin,
        CategoryAdmin,
        UserAdmin
    }
}
</script>
