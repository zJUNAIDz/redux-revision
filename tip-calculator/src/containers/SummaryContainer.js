import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import {
  selectSubtotal,
  selectTipAmount,
  selectTotal
} from '../store/items/selector';
const mapStateToProps = (state) => {
  // //subtotal
  // console.log(state);
  // const subtotal = state.items.reduce((acc, item) => {
  //   console.log({ item });
  //   return acc + item.price * item.quantity;
  // }, 0);
  // console.log({ subtotal });
  // const tipAmount = subtotal * (state.tipPercentage / 100);
  // const total = subtotal + tipAmount;
  //* Reselect method
  const subtotal = selectSubtotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);
  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
