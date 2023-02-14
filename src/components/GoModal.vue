<template>
  <div class="modal-background" @click.self="$emit('on:close')">
    <div class="modal-container">
      <h1>Lets flit arround </h1>
      <form>
        <label for="">Type your flit ☺️</label>
        <textarea
        type="text"
        required>
        </textarea>
        <button type="submit">Flit it!</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['on:close'],
  setup( ) {

}}
</script>

<style scoped>
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
}

.modal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  padding: 20px; 
  width: 300px;
  height: 350px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
textarea{
  padding: 5px 5px;
  border-style: none;
  border: solid 0.8px #2c3e50;
  border-radius: 5px;
  color: #00172d;
  width: 90%;
  align-self: center;
  height: 60%;
}
label{
  align-self: flex-start;
}

form{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}


button {
    width: 80%;
    align-self: center;
    padding: 5px;
    margin-top: 10px;
    border: solid 1px #00172d;
    border-radius: 6px;
    background-color: unset;
    font-size: 16px;
    font-weight: bolder;
    color: #00172d;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    color: red;
}


.fade-in {
  animation: fadeIn ease-out 0.2s;
  -webkit-animation: fadeIn ease-out 0.2s;
  -moz-animation: fadeIn ease-out 0.2s;
  -o-animation: fadeIn ease-out 0.2s;
  -ms-animation: fadeIn ease-out 0.2s;
}

@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}
</style>