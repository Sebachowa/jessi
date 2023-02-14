import { useStore } from "vuex"
import { computed } from "vue";


const useFlits = () => {
    const store = useStore()

    return {
        //Getters
        flits: computed(() => store.getters['flits/getFlits']),

        //Actions
        fetchFlits: () => store.dispatch("flits/fetchFlits"), 
        fetchFollowedPeopleFlits: (token) => store.dispatch("flits/fetchFollowedPeopleFlits", token),
        createNewFlit: (flitInfo) => store.dispatch("flits/createNewFlit", flitInfo),
        fetchSelectedFlit: () => store.dispatch("flits/fetchSelectedFlit")
        
    }
}

export default useFlits