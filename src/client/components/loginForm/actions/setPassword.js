export const setPassword = (state, actions) => password =>
  actions.validate({
    ...state,
    data: {
      ...state.data,
      password
    }
  });
