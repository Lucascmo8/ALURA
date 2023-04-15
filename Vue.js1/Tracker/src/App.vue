<template>
  <main>
    <div class="barraLateral">
      <MenuLateral />
    </div>
    <div class="content">
      <Formulario @EnviarTarefa="salvarTarefa"/>
      <div class="listaDeTarefas">
        <Tarefa v-for="(tarefa,index) in Tarefas" :key="index" :titulo="tarefa.titulo" :duracao="tarefa.duracao"/>
        <div v-show="Tarefas.length == 0" id="aviso"><h1>Não há Tarefas aqui</h1></div>
      </div>
    </div>
  </main>
</template>

<script>
  import MenuLateral from './components/MenuLateral.vue';
  import Formulario from './components/Formulario.vue';
  import Tarefa from './components/Tarefa.vue';
  export default{
    data(){
      return{
        Tarefas:[],
      }
    },
    components:{
      MenuLateral,
      Formulario,
      Tarefa,
    },
    methods:{
      salvarTarefa(tarefa){
        
        console.log(tarefa)
        this.Tarefas.push(tarefa)
      }
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

  .listaDeTarefas{
    @apply flex flex-col justify-center w-full h-auto p-4 gap-4
  }

  div#aviso{
    @apply h-auto p-2 text-white font-bold shadow-lg bg-red-600 rounded-lg
  }
</style>