export const setUsername = username => (state, actions) =>
  actions.validate({
    ...state,
    data: {
      ...state.data,
      username
    }
  });
