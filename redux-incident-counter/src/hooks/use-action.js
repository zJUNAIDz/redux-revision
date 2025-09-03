import { bindActionCreators } from 'redux';

export const useAction = (actions, dispatch) => {
  return bindActionCreators(actions, dispatch);
};
