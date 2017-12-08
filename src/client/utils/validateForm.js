export function validateForm(schema) {
  return () => state => {
    const invalidFields = Object.entries(state.data)
      .reduce((errors, [key, value]) => schema[key].check(value, state.data)
        ? errors
        : [...errors, { message: schema[key].message, value }],
      []);
    return {
      ...state,
      isValid: !invalidFields.length,
      /* eslint eqeqeq:"off" */
      errors: invalidFields
        .filter(f => f.value != null)
        .map(f => f.message)
    };
  };
}
