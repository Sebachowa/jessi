function state() {
    return {
      users: [],
      isLoading: false,
      selectedUser: {},
      isFollowed: false,
      selfUser: null,
      token: null
    };
  }

export default state;