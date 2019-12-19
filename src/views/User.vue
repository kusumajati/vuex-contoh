<template>
  <div>
    <h2>All User</h2>
    <!-- <h1>token: {{token}}</h1> -->
    <ul class="list-group">
      <li class="list-group-item" v-for="(user, index) in users" :key="index">{{user.username}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    seeId() {
      this.$router.push("/user/2");
    }
  },
  created() {
    axios
      .get("/user", {
        headers: {
            'Authorization':'sdkjhfdshkfjhsafskjdfhsjf'
        }
      })
      .then(res => {
        var allUser = res.data.data;
        this.users = [...allUser];
        // this.users = res.data.data
      });
  }
};
</script>