import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
const mapStateToProps = (state) => {
  //subtotal
  console.log(state);
  const subtotal = state.items.reduce((acc, item) => {
    console.log({ item });
    return acc + item.price * item.quantity;
  }, 0);
  console.log({ subtotal });
  const tipAmount = subtotal * (state.tipPercentage / 100);
  const total = subtotal + tipAmount;
  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
