<template>
  <span class="go-back">
    <button @click="goBack">Back</button>
  </span>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.go-back {
  display: flex;
  flex-direction: column;

  cursor: pointer;
}

button {
  align-self: center;
  border: 1px black solid;
  padding: 10px 20px;
  background-color: black;
  color: white;
  font-weight: 900;
  margin: 15px;
  border-radius: 6px;
}

</style>
