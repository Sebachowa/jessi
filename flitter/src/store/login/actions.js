import flitterApi from "@/api/flitterApi";
import router from "@/router";

const actions = {
  async login({ commit }, credentials) {
    const { data } = await flitterApi.post("/users/login", credentials);

    commit("setToken", data.token);

    commit("setSelfUser", data.user);

    localStorage.setItem("currentUserId", JSON.stringify(data.user._id));

    localStorage.setItem(
      "followedPeople",
      JSON.stringify(data.user.peopleYouFollow)
    );

    localStorage.setItem("token", data.token);

    router.push({ name: "flitsView" });
  },

  async signUp({ commit }, userInfo) {
    const { data } = await flitterApi.post("/users/signup", userInfo);

    commit("setSelfUser", data.user);

    commit("setToken", data.token);

    localStorage.setItem(
      "followedPeople",
      JSON.stringify(data.user.peopleYouFollow)
    );

    localStorage.setItem("token", data.token);

    router.push({ name: "flitsView" });
  },

  //Logout: usar el método sesionStorage.clear() para limpiar la persistencia del estado
};

export default actions;
