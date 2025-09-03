import { Card } from '@twilio-paste/core';
import { TipSelectContainer } from '../containers/TipSelectContainer';

import { MeunItemsContainer } from '../containers/MenuItemsContainer';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { Summary } from './Summary';

const Calculator = () => {
  return (
    <Card>
      {/* <NewItemForm /> */}
      <NewItemFormContainer />
      {/* <MenuItems items={items} /> */}
      <MeunItemsContainer />
      <TipSelectContainer />
      <Summary />
    </Card>
  );
};

export default Calculator;
