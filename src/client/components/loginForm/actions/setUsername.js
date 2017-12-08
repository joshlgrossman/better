export const setUsername = (state, actions) => username =>
  actions.validate({
    ...state,
    data: {
      ...state.data,
      username
    }
  });
