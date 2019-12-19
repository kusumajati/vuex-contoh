<template>
    <div>
         <p> Counter: {{counter}} </p>
         <p>Double Counter: {{doubleCounter}}</p>

    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
data(){
    return{}
},
 computed: mapGetters([
      'counter',
      'doubleCounter',
    ])
  

}
</script>