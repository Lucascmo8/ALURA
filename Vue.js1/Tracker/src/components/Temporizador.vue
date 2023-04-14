<template>
    <div class="cronometro">
        <Cronometro :tempoEmSegundos="tempoEmSegundos"/>
        <div class="botoesCronometros">
            <button @click="start" :disabled="playDisabled"><i class="uil uil-stopwatch"></i> Play</button>
            <button @click="stop"><i class="uil uil-stopwatch-slash"></i> Stop</button>
        </div>
    </div>
</template>

<script>
import Cronometro from './Cronometro.vue';
    
    export default{
        data(){
            return{
                tempoEmSegundos:0,
                cronometro:0,
                playDisabled:false,
            }
        },
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
            }
        },
    }
</script>

<style scoped>
    div.cronometro{
        @apply p-2 bg-white gap-2 h-24 flex flex-col justify-between
    }

    div.botoesCronometros{
        @apply flex gap-2
    }

    button{
        @apply rounded-lg border border-black p-1 px-2 shadow-lg text-sm sm:text-lg
    }

    button:disabled{
        @apply bg-gray-400  text-white
    }
</style>