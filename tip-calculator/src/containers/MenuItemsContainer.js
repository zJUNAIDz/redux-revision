import { MenuItems } from '../components/MenuItems';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

export const MeunItemsContainer = connect(mapStateToProps)(MenuItems);
