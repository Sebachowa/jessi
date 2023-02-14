<template>
  <div class="flit-card">
    <div class="flit-author">
      <img :src="flit.id_user.avatar || flitAvatar" />
      <h3 @click="$emit('goUserProfile', flit)">{{ flit.id_user.name || flitName }}</h3>
    </div>

    <div class="flit-info">
      <div class="flit-message">
        <p>{{ flit.message }}</p>
      </div>

      <div class="flit-date">
        <p>{{ flit.createdAt }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    flit: {
      type: Object,
      required: true,
    },
    flitName: {
      type: String,
    },
    flitAvatar: {
      type: String,
    },
  },
});
</script>

<style scoped>
.flit-card {
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border: 0.5px solid black;
  border-radius: 6px;
  margin: 10px;
}

.flit-info {
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: black;
}

.flit-info > p,
h3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: black;
  margin-right: 8px;
}

.flit-author {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-start;
  margin-bottom: 8px;
}

.flit-author > img {
  width: 40px;
  height: 40px;
  margin-right: 5px;
}

.flit-message {
  text-align: left;
  background-color: rgb(255, 251, 233);
  padding: 20px;
  width: 100%;
  border: 0.5px solid rgb(171, 175, 143);
  border-radius: 8px;
}

.flit-date {
  width: 100%;
}
.flit-date > p {
  font-size: 12px;
  padding-top: 5px;
  text-align: end;
}

.astext {
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
</style>
