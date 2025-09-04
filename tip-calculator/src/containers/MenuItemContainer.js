import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import {
  removeItem,
  updateItemPrice,
  updateitemQuantity
} from '../store/items/actions';
import { selectItemTotal } from '../store/items/selector';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)), // ownProps makes it self aware and no need to pass the needed data about itself explicitly, tho you can very much do it if you want.
    // remove: (uuid) => dispatch(removeItem(uuid))
    updatePrice: (price) => dispatch(updateItemPrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateitemQuantity(ownProps.uuid, quantity))
  };
};

const mapStateToProps = (state, ownProps) => ({
  total: selectItemTotal(state, ownProps)
});

export const MenuItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
