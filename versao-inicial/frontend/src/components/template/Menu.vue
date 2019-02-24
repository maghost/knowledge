<template>
    <aside class="Menu" v-show="isMenuVisible">
        <div class="MenuFilter">
            <i class="fa fa-search fa-lg"></i>
            <input type="text" placeholder="Digite para filtrar"
                v-model="treeFilter" class="MenuFilter__field">
        </div>
        <Tree
            :data="treeData"
            :options="treeOptions"
            :filter="treeFilter"
            ref="tree"
            class="MenuTree" />
    </aside>
</template>

<script>
import { mapState } from 'vuex'
import Tree from 'liquor-tree'
import { baseApiUrl } from '@/global'
import axios from 'axios'

export default {
    name: 'Menu',
    components: { Tree },
    computed: mapState(['isMenuVisible']),
    data: function() {
        return {
            treeFilter: '',
            treeData: this.getTreeData(),
            treeOptions: {
                propertyNames: { 'text': 'name' },
                filter: { emptyText: 'Categoria não encontrada' }
            }
        }
    },
    mounted() {
        this.$refs.tree.$on('node:selected', this.onNodeSelect)
    },
    methods: {
        getTreeData() {
            const url = `${baseApiUrl}/categories/tree`

            return axios.get(url).then(res => res.data)
        },
        onNodeSelect(node) {
            this.$router.push({
                name: 'articleList',
                params: { id: node.id }
            })

            if (this.$mq === 'xs' || this.$mq === 'sm') {
                this.$store.commit('toggleMenu', false)
            }
        }
    }
}
</script>

<style lang="scss">
    .Menu {
        grid-area: menu;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background: linear-gradient(to right, #232526, #414345);
    }

    .MenuFilter {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding-bottom: 8px;
        border-bottom: 1px solid #aaaaaa;

        i {
            color: #aaaaaa;
            margin-right: 10px;
        }
    }

    .MenuFilter__field {
        color: #cccccc;
        font-style: 1.3rem;
        border: 0;
        outline: 0;
        width: 100%;
        background-color: transparent;
    }

    .MenuTree {
        a, a:hover {
            color: #dddddd;
            text-decoration: none;
        }

        .tree-node.selected > .tree-content,
        .tree-node .tree-content:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .tree-arrow.has-child {
            filter: brightness(2);
        }


        .tree-filter-empty {
            color: #aaaaaa;
            margin-left: 20px;
            margin-right: 20px;
            text-align: center;
            font-size: 0.9rem;
        }
    }
</style>
