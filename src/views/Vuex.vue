<template>
    <div>
        <h1>{{title}}</h1>
        <app-result :counter="counter"></app-result>
        <app-counter 
        :tambah="tambah" 
        :kurang="kurang"
        @changedTitle="title=$event"
        ></app-counter>

    </div>
</template>

<script>
import Counter from '../components/Counter.vue'
import Result from '../components/Result.vue'
export default {
    data(){
        return{
            counter:0,
            title:''
        }
    },
    components:{
        appCounter: Counter,
        appResult: Result
    },
    computed:{
        hasil(){
            return this.counter
        }
    },
    methods:{
        tambah(){
            this.counter++
        },
        kurang(){
            this.counter--
        }
    }
}
</script>