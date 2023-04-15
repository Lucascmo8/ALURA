<template>
    <div class="cronometro">
        <Cronometro :tempoEmSegundos="tempoEmSegundos"/>
        <div class="botoesCronometros">
            <button @click="start" v-if="!playDisabled"  :disabled="isAvailable"><i class="uil uil-stopwatch"></i> Play</button>
            <button @click="stop" v-else><i class="uil uil-stopwatch-slash"></i> Stop</button>
        </div>
    </div>
</template>

<script>
import Cronometro from './Cronometro.vue';
    
    export default{
        name:'Temporizador',
        data(){
            return{
                tempoEmSegundos:0,
                cronometro:0,
                playDisabled:false,
            }
        },
        props:{isAvailable:Boolean}
        ,
        components:{
            Cronometro,
        }
        ,
        methods:{
            start(){
                this.cronometro = setInterval(() => {
                    this.tempoEmSegundos++
                }, 1000);
                this.playDisabled = true
            },
            stop(){
                clearInterval(this.cronometro)
                this.playDisabled = false
                this.$emit('EnviarOTempo',this.tempoEmSegundos)
                this.tempoEmSegundos = 0
            }
        },
        emits:['EnviarOTempo']
    }
</script>

<style scoped>
    div.cronometro{
        @apply p-2 bg-white gap-2 h-24 flex flex-col sm:flex-row justify-between sm:items-center
    }

    div.botoesCronometros{
        @apply flex gap-2
    }

    button{
        @apply rounded-lg border border-black p-1 px-2 shadow-lg text-sm sm:text-lg
    }

    button:disabled{
        @apply bg-red-600 text-white cursor-not-allowed
    }
</style>