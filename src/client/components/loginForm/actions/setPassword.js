export const setPassword = (state, actions) => password =>
  actions.validateForm({
    ...state,
    data: {
      ...state.data,
      password
    }
  });
