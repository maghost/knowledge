<template>
    <div class="Stat">
        <div class="Stat__icon">
            <i :class="icon" :style="{ color: this.color }"></i>
        </div>
        <div class="Stat__info">
            <span class="Stat__title">
                {{ title }}
            </span>
            <span class="Stat__value">
                {{ value }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Stat',
    props: {
        title: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            default: 0
        },
        icon: {
            type: String
        },
        color: {
            type: String,
            default: '#000'
        }
    }
}
</script>

<style lang="scss" scoped>
    .Stat {
        flex: 1;
        display: flex;
        border-radius: 8px;
        margin-right: 20px;
        margin-bottom: 20px;
        background-color: #fff;
        padding: 20px;
        bottom: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }

    .Stat__icon {
        display: flex;
        align-items: center;

        i {
            font-size: 4.2rem;
        }
    }

    .Stat__info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-left: 20px;
    }

    .Stat__title {
        font-size: 1rem;
    }

    .Stat__value {
        font-size: 2.3rem;
    }
</style>
