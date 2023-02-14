<template>
  <div class="signup-wraper">
    <div class="signup-form">
      <h1>Sign up</h1>
      <form>
        <div>
          <input type="name" placeholder="Name" v-model="userInfo.name" required>
        </div>
        <br />
        <div>
          <input type="email" placeholder="Email" v-model="userInfo.email" required>
        </div>
        <br />
        <div>
          <input type="password" placeholder="Password" v-model="userInfo.password" required>
        </div>
        <br />
        <div>
          <input type="confirm password" placeholder="Confirm password" v-model="confirmPassword" required>
        </div> 
        <br />
        <div id="lower">
            <input class="button" type="submit" value="Signup" @click="signUp(userInfo)">  
        </div>
        <div>
          <router-link :to="{name: 'loginView'}">Ir a Login</router-link>
        </div>
      </form>
      <GoBack />
    </div>
  </div>
 </template>
  
<script>

  import { defineComponent, ref } from 'vue';
  import GoBack from "@/components/GoBack";
  import useUsers from '@/composables/useUsers';
  
  export default defineComponent({
    name: 'signUpView',
    components: {
      GoBack
    },
  
  setup() {
    
    const confirmPassword = ref(null)
    
    const userInfo = ref({
      name: null,
      email: null,
      password: null,
    })

    const showPasswordRequirements = () => {
      const message = "Both the username and password must be composed of letters between a-z or A-Z. It must not contain numbers, special characters, or the _ character.";
      alert(message);
    };

    const { signUp } = useUsers()

/*     function showUserInfo (userInfo) {
      console.log(userInfo)
    } */

    return {
      confirmPassword,
      userInfo,
      showPasswordRequirements,
      signUp
    }       
  }
});

  
</script>

<style scoped>

.signup-wraper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh
}
.signup-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 300px;
  align-items: center;
  padding: 20px 40px;
  border: 3px solid black;
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

.signup-form .button {
  width: 100%;
  padding: 5px 5px;
  margin-top: 15px;
  margin-bottom: 20px;
  border-style: none;
  border: solid 1.5px #00172d;
  border-radius: 6px;
  background-color: unset;
  font-size: 18px;
  font-weight: bolder;
  color: #00172d;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

</style>