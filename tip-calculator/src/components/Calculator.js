import { Card } from '@twilio-paste/core';
import { TipSelectContainer } from '../containers/TipSelectContainer';

import { MeunItemsContainer } from '../containers/MenuItemsContainer';
import { NewItemForm } from './NewItemForm';
import { Summary } from './Summary';

const Calculator = () => {
  return (
    <Card>
      <NewItemForm />
      {/* <MenuItems items={items} /> */}
      <MeunItemsContainer />
      <TipSelectContainer />
      <Summary />
    </Card>
  );
};

export default Calculator;
