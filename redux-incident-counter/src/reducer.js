import { DECREMENT, INCREMENT, SET } from './actions';

export const initialState = { count: 0 };
export const reducer = (state = initialState, action) => {
  console.log({ state });
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case SET:
      return { count: parseInt(action.payload, 10) };
    default:
      return state;
  }
};
