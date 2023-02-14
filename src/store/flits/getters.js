const getters = {
    getFlits(state) {
      return state.flits;
    },
    getIsLoading(state) {
      return state.isLoading;
    },
    getSelectedFlit(state) {
      return state.selectedFlit
    }
  };
  
  export default getters;