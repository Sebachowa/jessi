function state() {
    return {
      users: [],
      isLoading: false,
      selectedUser: {},
      isFollowed: false,
      selfUser: {},
      token: null
    };
  }

export default state;