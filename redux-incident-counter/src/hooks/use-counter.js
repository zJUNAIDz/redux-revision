import { useDispatch } from 'react-redux';
import { decrement, increment, set } from '../actions';
import { useAction } from './use-action';

export const useCounter = () => {
  const dispatch = useDispatch();
  const actions = useAction({ increment, decrement, set }, dispatch);
  return actions;
};
