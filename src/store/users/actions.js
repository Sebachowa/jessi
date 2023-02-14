import flitterApi from "@/api/flitterApi";
import router from "@/router";

const actions = {
  async fetchUsers({ commit }) {
    const { data } = await flitterApi.get("/users");
    commit("setUsers", data);
  },

  async fetchSelectedUser({ commit }, id) {

    commit("setIsLoading", true)
    const { data } = await flitterApi.get(`/users/${id}`) 
    commit("setSelectedUser", data.user);
    const selectedUserFlits = JSON.stringify(data.user.flits)
    localStorage.setItem('selectedUserFlits', selectedUserFlits);
    commit("setIsLoading", false)
  },
  async followAUser({ commit }, {id, selfUserId}) {

    console.log("Id del usuario al que quieres seguir:", id)
    console.log("Tu id:", selfUserId)
    const { data } = await flitterApi.put(`/users/${id}/follow`, {_id: selfUserId}) 
    commit("setFollowedPeople", data.peopleYouFollow); 
  },
  async unfollowAUser({ commit }, {id, selfUserId}) {
    
    const { data } = await flitterApi.put(`/users/${id}/unfollow`, {_id: selfUserId}) 
    commit("setFollowedPeople", data.peopleYouFollow);
  },
  async login({ commit }, credentials) {
    
    const { data } = await flitterApi.post("/users/login", credentials);
    commit("setSelfUser", data.user);
    localStorage.setItem("token", data.token);
    localStorage.setItem("selfUserId", data.user._id)

    const followedPeople = JSON.stringify(data.user.peopleYouFollow)
    localStorage.setItem('followedPeople', followedPeople);

    router.push({ name: "flitsView" });
  },

  async signUp({ commit }, userInfo) {
    
    const { data } = await flitterApi.post("/users/signup", userInfo);
    commit("setSelfUser", data.user);
    localStorage.setItem("token", data.token);
    localStorage.setItem("selfUserId", data.user._id)
    router.push({ name: "flitsView" });
  },


  
};


export default actions;
