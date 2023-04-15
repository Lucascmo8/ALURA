<template>
    <form @submit.prevent="">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="nomeDaTarefa" required>
        <Temporizador @EnviarOTempo="finalizarTarefa" :isAvailable="nomeDaTarefa.length == 0"/>
    </form>
</template>

<script>
    import Temporizador from './Temporizador.vue';

    export default{
        name:"Formulario",
        data(){
            return{
                nomeDaTarefa:'',
            }
        },
        emits:['EnviarTarefa']
        ,
        components:{
            Temporizador,
        },
        methods:{
            finalizarTarefa(tempoDaTarefa){
                this.$emit('EnviarTarefa',{titulo:this.nomeDaTarefa,duracao:tempoDaTarefa})
                this.nomeDaTarefa = ''
            }
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