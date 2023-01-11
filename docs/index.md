<style>
body{
    direction:rtl;
}
</style>

<script setup>
import { onMounted } from 'vue';
import MainPortal from "./components/MainPortal.vue";  
  
onMounted(() => { 
document.body.style.direction='rtl'
})
</script>

<MainPortal/>
