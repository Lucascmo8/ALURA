<template>
  <main>
    <div class="barraLateral">
      <MenuLateral />
    </div>
    <div class="content">
      <Formulario />
    </div>
  </main>
</template>

<script>
  import MenuLateral from './components/MenuLateral.vue';
  import Formulario from './components/Formulario.vue';
  export default{
    components:{
      MenuLateral,
      Formulario
    }
  }
</script>

<style>
  main{
    @apply flex 
  }
  .barraLateral{
    @apply w-1/3 sm:w-1/4 h-screen bg-slate-950
  }

  .content{
    @apply w-2/3 sm:w-3/4 h-auto bg-slate-500
  }
</style>