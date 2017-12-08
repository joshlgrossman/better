export const setUsername = (state, actions) => username =>
  actions.validateForm({
    ...state,
    data: {
      ...state.data,
      username
    }
  });
