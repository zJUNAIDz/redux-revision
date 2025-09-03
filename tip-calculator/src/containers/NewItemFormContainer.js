import { connect } from 'react-redux';
import NewItemForm from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';
//* Mapping dispatch to props has 3 ways
//* Method 1: use dispatch from callback argument
// const mapDispatchToProps = (dispatch) => {
//   //getting dispatch as callback argument from connect
//   return {
//     onSubmit: (name, price) => dispatch(addNewItem(name, price)) //mapping it with onSubmit props
//   };
// };

//* Method 2: use bind action creator
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       onSubmit: (name, price) => addNewItem(name, price)
//     },
//     dispatch
//   );
// };

//* Direct object. easiest and cleanest method
const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price)
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
