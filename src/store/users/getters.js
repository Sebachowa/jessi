const getters = {
    getUsers(state) {
        return state.users
    },
    getIsLoading(state) {
        return state.isLoading
    },
    getSelectedUser(state) {
        return state.selectedUser
    },
    getIsFollowed(state) {
        return state.isFollowed
    },
    getSelfUser(state) {
        return state.selfUser
    },
    getFollowedPeople(state) {
        return state.selfUser.peopleYouFollow
    },
    getToken(state) {
        return state.token
    }
  
}

export default getters