<template>
    <section>
        <h1 class="title">{{ title }}</h1>
        <h6 class="date">{{ formatDate(date) }}</h6>
    </section>
</template>

<script setup>
import dayjs from 'dayjs';
import { onMounted } from 'vue';
const Name = 'InnerTitleTime';
onMounted(() => {
    document.body.style.direction = 'rtl'; // for route first load only
});
const props = defineProps({ title: String, date: String });
const formatDate = date => {
    return dayjs(date).format('HH:mm YYYY-MM-DD'); // custom ltr fix
};
</script>

<style lang="scss">
@import '../styles/global.scss';
.nested-image {
    margin: 1rem 0;
    max-height: 100vw;
    width: 100%;
    object-fit: cover;
}
</style>

<style scoped>
section {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}
.date {
    font-size: small;
}
</style>
