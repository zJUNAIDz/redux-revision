import { Card } from '@twilio-paste/core';
import { TipSelectContainer } from '../containers/TipSelectContainer';

import { MeunItemsContainer } from '../containers/MenuItemsContainer';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { SummaryContainer } from '../containers/SummaryContainer';

const Calculator = () => {
  return (
    <Card>
      {/* <NewItemForm /> */}
      <NewItemFormContainer />
      {/* <MenuItems items={items} /> */}
      <MeunItemsContainer />
      <TipSelectContainer />
      <SummaryContainer />
    </Card>
  );
};

export default Calculator;
