<template>
  <router-view />
  <div id="app">
    <FooterNav />
  </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import FooterNav from './components/FooterBar.vue';
  
    export default defineComponent({
      components: {
        FooterNav
      },

      setup() {
        
      }
    });
  </script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  height: 100%;

  background-image: linear-gradient(
    10deg,
    #f4f87d,
    #f6ba59,
    #fab2c6,
    #d1f1ccbc,
    #afe8dccc,
    #6ad6b2bb,
    #96c990e1,
    #e6fca9
  );
  background-size: cover;
  overflow-y: scroll;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(49, 49, 49);
  margin-top: 50px;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
