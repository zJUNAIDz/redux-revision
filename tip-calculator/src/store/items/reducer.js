import { ITEM_ADDED, ITEM_REMOVED } from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast Red', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham Red', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  switch (action.type) {
    case ITEM_ADDED:
      const item = { uuid: id++, quantity: 1, ...action.payload };
      return [...state, item];
    case ITEM_REMOVED:
      const newItem = state.filter((item) => action.payload.uuid !== item.uuid);
      console.log({ newItem });
      return newItem;
    default:
      return state;
  }
};

export default reducer;
