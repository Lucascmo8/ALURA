<template>
    <form @submit.prevent="">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
        <Temporizador />
    </form>
</template>

<script>
    import Temporizador from './Temporizador.vue';

    export default{
        name:"Formulario",
        components:{
            Temporizador,
        }
    }
</script>

<style scoped>
    form{
        @apply h-auto w-full grid grid-cols-2 shadow-lg bg-white p-2 items-center justify-items-center gap-2
    }

    input{
        @apply border h-20 w-full border-black rounded-lg p-2 shadow-lg
    }
    
</style>