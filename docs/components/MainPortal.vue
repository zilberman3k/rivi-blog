<template>
<div>
  <Hero />
  <div v-for="(article, index) in articles" :key="index">
    <ArticleCard :title="article.title" :excerpt="article.excerpt" :image="article.image" :author="article.Author || 'ריבי קלמרו'" :href="article.path" :date="formatDate(article.Updated)" />
  </div>
</div>
</template>

<script>
import Hero from "./Hero.vue";
import ArticleCard from "./ArticleCard.vue";
import articles from '../../data.json';
import dayjs from "dayjs";

export default {
  name: "MainPortal",
  components:{
    ArticleCard,
    Hero
  },
  data(){
    return {
      articles
    }
  },
  methods:{
    formatDate(date){
      return dayjs(date).format('HH:mm YYYY-MM-DD'); // custom ltr fix
    }
  }
}
</script>

<style>
  body{
    direction: rtl;
  }
</style>