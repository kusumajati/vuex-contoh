<template>
    <div>
<form @submit="login($event)">
  <div class="form-group">
    <label for="exampleInputEmail1"  >Email address</label>
    <input v-model="userCred.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="userCred.password" type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary" @click="login($event)">Submit</button>
</form>
<h2>{{response}}</h2>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            userCred:{
                email:'',
                password:''
            },
            response:{}
        }
    },
    methods:{
        login(event){
            event.preventDefault();
            
            axios.post('/user/login', this.userCred)
            .then(res=>{
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', res.data.user_id)
            }).then(()=>{
                this.$router.push('/')
            })
        }
    }
}
</script>