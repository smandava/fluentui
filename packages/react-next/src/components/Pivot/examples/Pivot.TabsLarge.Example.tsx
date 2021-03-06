import * as React from 'react';
import { Pivot, PivotItem } from '@fluentui/react-next/lib/Pivot';
import { Label } from '@fluentui/react-next/lib/Label';

export const PivotTabsLargeExample = () => (
  <div>
    <Pivot aria-label="Links of Large Tabs Pivot Example" linkFormat="tabs" linkSize="large">
      <PivotItem headerText="Foo">
        <Label>Pivot #1</Label>
      </PivotItem>
      <PivotItem headerText="Bar">
        <Label>Pivot #2</Label>
      </PivotItem>
      <PivotItem headerText="Bas">
        <Label>Pivot #3</Label>
      </PivotItem>
      <PivotItem headerText="Biz">
        <Label>Pivot #4</Label>
      </PivotItem>
    </Pivot>
  </div>
);
