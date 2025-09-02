export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET = 'SET';
export const RESET = 'RESET';
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const set = (value) => {
  console.log({ value });
  return { type: SET, payload: value };
};
export const reset = () => ({ type: RESET, payload: 0 });
