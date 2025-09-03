import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
import { removeItem } from '../store/items/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)) // ownProps makes it self aware and no need to pass the needed data about itself explicitly, tho you can very much do it if you want.
    // remove: (uuid) => dispatch(removeItem(uuid))
  };
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
