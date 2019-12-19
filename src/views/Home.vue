
<template>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Welcome Home {{user.username}}</h1>

  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      user: {}
    }
  },
  created(){
    axios.get(`/user/${localStorage.getItem('userId')}`)
    .then(res=>{
      this.user = res.data.data
    })
  }
}
</script>

<style scoped> 
  div{
    color: red !important;
  }
</style>