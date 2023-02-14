<template>
  <div class="homeview-container">
    <h1>Welcome to Flitter</h1>
    <p>Here you can see the latest flits and connect with others</p>
    <div class="flit-feed">
      <!-- aquí iría la lógica para renderizar los flits -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
};
</script>

<style>
.homeView-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flit-feed {
  width: 100%;
  height: 80%;
  overflow-y: scroll;
}
</style>
