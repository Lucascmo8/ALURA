<template>
    <div>
        <h2>{{ titulo || `Tarefa sem nome` }}</h2>
        <Cronometro :tempoEmSegundos="duracao"/>
    </div>
</template>

<script>
    import Cronometro from './Cronometro.vue';
    export default {
        name:'Tarefa',
        components:{
            Cronometro
        },
        props:{
            titulo:String,
            duracao:Number,
        }
    }
</script>

<style scoped>
    div{
        @apply h-auto p-2 text-white font-bold shadow-lg bg-slate-800 rounded-lg
    }
</style>