import * as actions from './actions';
import * as state from './state';

export const router = props => {
  window.history.replaceState({}, '', state.location);
  return {
    ...props,
    actions: { ...props.actions, router: actions },
    state: { ...props.state, router: state },
    view: (state, actions) => 
      (props.routes[state.router.location] || props.routes['404'])(state, actions)  
  };
};