import flitterApi from "@/api/flitterApi";

const actions = {
  async fetchFlits({ commit }) {
    
    commit("setIsLoading", true);
    const { data } = await flitterApi.get("/feed/flits");
    commit("setIsLoading", false);
    data.flits.forEach(flit => {
      const localDate = new Date(flit.createdAt).toLocaleString() //Para cambiar formato buscar método .format
      flit.createdAt = localDate
    });
    commit("setFlits", data.flits);
  },

  async fetchFollowedPeopleFlits({ commit }, token) {

    commit("setIsLoading", true)
    const { data } = await flitterApi.get("/users/flitsPeopleYouFollow",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    commit("setIsLoading", false)
    data.Flit.forEach(flit => {
      const localDate = new Date(flit.createdAt).toLocaleString() //Para cambiar formato buscar método .format
      flit.createdAt = localDate
    });
    commit("setFlits", data.Flit);
  },

/*   async createNewFlit({ commit }, flitInfo) {

    commit("setIsLoading", true);
    await flitterApi.post("/feed/flits", flitInfo);
    commit("setIsLoading", false);
  }, */

  async fetchSelectedFlit({ commit }) {

    commit("setIsLoading", true);
    const { data } = await flitterApi.get("/feed/flits/:flitId");
    commit("setSelectedFlit", data.flit);
    commit("setIsLoading", false);
  },

};

export default actions;