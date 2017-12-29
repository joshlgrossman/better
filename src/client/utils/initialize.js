export function wrapActions(actions, wrappers) {
  for (const key in actions) {
    const action = actions[key];
    if (typeof action === 'function') {
      actions[key] = wrappers.reduce((result, func) => func(result), action);
    } else if (typeof action === 'object') {
      actions[key] = wrapActions(action, wrappers);
    }
  }
}

export function initialize(app) {
  app.loadState();
}
