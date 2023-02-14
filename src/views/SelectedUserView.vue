<template>
  <div></div>
  <div v-if="isLoading">
    <div>Cargando...</div>
  </div>
  <div v-else>
    <div class="user-card">
      <img class="user-background" src="../assets/user-bg.jpg" />

      <div class="user-info">
        <div class="avatar-and-follow-btn">
          <img class="avatar" :src="selectedUser.avatar" />
          <div v-if="isOwnProfile">
            <button>Edit</button>
          </div>
          <div v-else>
            <button v-if="!isFollowed" @click="followAUser({id, selfUserId})">Follow</button>
            <button v-else @click="unfollowAUser({id, selfUserId})">Unfollow</button>
          </div>
        </div>
        <h1>{{ selectedUser.name }}</h1>
        <p class="bio">
          {{ selectedUser.bio }}
        </p>
        <div class="follow-count">
          <p>
            <span>{{ selectedUser.peopleYouFollow.length }}</span> following
          </p>
          <p>
            <span>{{ selectedUser.followers.length }}</span> followers
          </p>
        </div>
      </div>
      <GoBack />
    </div>
    <div class="flitList-main-wraper">
      <div v-if="isLoading">Cargando...</div>
      <div class="flits-list" v-else>
        <FlitCard
          v-for="flit in selectedUser.flits"
          :key="flit._id"
          :flit="flit"
          :flit-name="selectedUser.name"
          :flit-avatar="selectedUser.avatar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useUsers from "@/composables/useUsers";
import { useRoute } from "vue-router";
import FlitCard from "@/components/FlitCard.vue";

export default defineComponent({
  name: "selectedUserView",
  components: {
    FlitCard,
  },

  setup() {

    const { selectedUser, fetchSelectedUser, /* selfUser, */ followAUser, unfollowAUser } = useUsers();

    /* const selfUserId = selfUser.value._id */

    const selfUserId = localStorage.getItem("selfUserId")

    /* const followedPeople = selfUser.value.peopleYouFollow; */

    let followedPeople = localStorage.getItem("followedPeople")
    
    followedPeople = JSON.parse(followedPeople)

    const route = useRoute();

    const id = route.params.id;

    let isFollowed = false;

    fetchSelectedUser(id);

   /*  let selectedUserFlits = localStorage.getItem("selectedUserFlits")
    
    selectedUserFlits = JSON.parse(selectedUserFlits) */


    if (followedPeople.includes(id)) {
      isFollowed = true;
    }

    /* const selectedUserFlits = selectedUser.value.flits */

   /*  selectedUserFlits.forEach(flit => {
      const localDate = new Date(flit.createdAt).toLocaleString() 
      flit.createdAt = localDate
    }); */

    
    const isOwnProfile = id === selfUserId;

    return {
      selectedUser,
      isFollowed,
      isOwnProfile,
      followAUser,
      unfollowAUser,
      id,
      selfUserId,
      /* selectedUserFlits */
    };
  },
});
</script>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-card {
  display: flex;
  flex-direction: column;
  margin: 120px 40px 30px;
}
.user-background {
  max-height: 150px;
  border-radius: 8px 8px 0px 0px;
}
.user-info {
  min-height: 200px;
  padding: 30px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  text-align: left;
  background-color: rgb(246, 245, 240);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.avatar-and-follow-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}

.avatar-and-follow-btn > .avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.533);
  align-self: flex-start;
}

.avatar-and-follow-btn > div > button {
  background: none;
  border: 1px solid rgb(103, 103, 103);
  border-radius: 15px;
  color: rgb(47, 47, 47);
  cursor: pointer;
  padding: 5px 15px;
  margin-left: 25px;
}

button:active,
button:hover {
  color: white;
  background-color: rgb(52, 52, 52);
}

.user-background img {
  height: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.bio {
  font-size: 16px;
  margin-bottom: 18px;
}

.follow-count {
  display: flex;
  justify-content: space-around;
}
.follow-count p {
  font-size: 14px;
}

.follow-count span {
  font-size: 16px;
  font-weight: bold;
}

.flitList-main-wraper {
  display: flex;
  justify-content: center;
}
</style>
