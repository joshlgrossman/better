export const setPassword = password => (state, actions) =>
  actions.validate({
    ...state,
    data: {
      ...state.data,
      password
    }
  });
