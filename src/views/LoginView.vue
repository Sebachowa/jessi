<template>
  <div class="login-wraper">
    <div class="login-form">
      <h1>Login</h1>
      <form>
        <div>
          <input type="email" placeholder="Email" v-model="credentials.email" required>
        </div>
        <br />
        <div>
          <input type="password" placeholder="Password" v-model="credentials.password" required>
        </div> 
        <br />
        <div id="lower">
            <input class="button" type="submit" value="Login" @click="login(credentials)">  
        </div>
        <div>
          <router-link :to="{name: 'signupView'}">Ir a Signup</router-link>
        </div>
      </form>
      <GoBack />
    </div>
  </div>
 </template>
  
<script>

  import { defineComponent, ref } from 'vue';
  import GoBack from '@/components/GoBack.vue';
  import useUsers from '@/composables/useUsers';
  
  export default defineComponent({
    name: 'loginView',
    components: {
      GoBack
    },
  
  setup() {

    const {login} = useUsers()

    const credentials = ref({
      email: null,
      password: null
    })

    return {
      credentials,
      login
    }       
  }
});

  
</script>

<style scoped>

.login-wraper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 300px;
  align-items: center;
  padding: 20px 40px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input {
  padding: 5px 5px;
  border-style: none;
  border: solid 0.8px #2c3e50;
  border-radius: 5px;
  color: #00172d;
}

.login-form .button {
  width: 100%;
  padding: 5px 5px;
  margin-top: 15px;
  margin-bottom: 20px;
  border-style: none;
  border: solid 1px #00172d;
  border-radius: 6px;
  background-color: unset;
  font-size: 16px;
  font-weight: bolder;
  color: #00172d;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

</style>