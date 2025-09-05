import {
  ITEM_ADDED,
  ITEM_PRICE_UPDATED,
  ITEM_QUANTITY_UPDATED,
  ITEM_REMOVED
} from './actions';
import { produce } from 'immer';
let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast Red', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Red', price: 12, quantity: 1 }
];

// export const reducer = (state = initialItems, action) => {
//   switch (action.type) {
//     case ITEM_ADDED:
//       return produce(state, (draft) => {
//         const item = { uuid: id++, quantity: 1, ...action.payload };
//         draft.push(item);
//       });
//     case ITEM_REMOVED:
//       return state.filter((item) => action.payload.uuid !== item.uuid);
//     case ITEM_PRICE_UPDATED:
//       return produce(state, (draft) => {
//         const item = draft.find((item) => item.uuid === action.payload.uuid);
//         item.price = parseInt(action.payload.price);
//       });

//     case ITEM_QUANTITY_UPDATED:
//       return produce(state, (draft) => {
//         const item = draft.find((item) => item.uuid === action.payload.uuid);
//         item.quantity = parseInt(action.payload.quantity);
//       });
//     default:
//       return state;
//   }
// };
export const reducer = produce((state, action) => {
  const { type } = action;

  if (type === ITEM_ADDED) {
    state.push({ uuid: id++, quantity: 1, ...action.payload });
  }
  if (type === ITEM_REMOVED) {
    state.filter((item) => action.payload.uuid !== item.uuid);
  }
  if (type === ITEM_PRICE_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.price = parseInt(action.payload.price);
  }
  if (type === ITEM_QUANTITY_UPDATED) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.quantity = parseInt(action.payload.quantity);
  }
}, initialItems);
export default reducer;
