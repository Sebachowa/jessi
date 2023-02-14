const mutations = {
    setFlits(state, flits) {
      state.flits = flits;
    },
    setIsLoading(state, value) {
      state.isLoading = value;
    },
    setSelectedFlit(state, selectedFlit) {
      state.selectedFlit = selectedFlit
    }
  };
  
  export default mutations;