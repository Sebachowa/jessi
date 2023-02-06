import flitterApi from "@/api/flitterApi";

const actions = {
  async fetchFlits({ commit }) {
    
    commit("setIsLoading", true);

    const { data } = await flitterApi.get("/feed/flits");

    commit("setIsLoading", false);

    commit("setFlits", data.flits);

    console.log(data.flits)


  },
  async createNewFlit({ commit }, flitInfo) {

    commit("setIsLoading", true);


    const { data } = await flitterApi.post("/feed/flits", flitInfo);


    console.log(data)


    commit("setIsLoading", false);
  },
  async fetchSelectedFlit({ commit }) {

    console.log("Entra en la función")

    commit("setIsLoading", true);

    const { data } = await flitterApi.get("/feed/flits/:flitId");

    commit("setSelectedFlit", data.flit);

    commit("setIsLoading", false);
  },

};

export default actions;