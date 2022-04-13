import { useState } from "react";
import ExampleLayout from "components/ExampleLayout";

import Switch from "@material-ui/core/Switch";

const SWITCHES_CODE = `
  import React from 'react';
  import Switch from '@material-ui/core/Switch';
  
  const Switches = () => {
    const [toggle, setToggle] = useState(true);
  
    return (
      <div>
        <Switch checked={toggle} onChange={() => setToggle(!toggle)} />
      </div>
    );
  }
  
  export default Switches;
  `;

const Switches = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <ExampleLayout title="Switch" codeString={SWITCHES_CODE}>
      <Switch checked={toggle} onChange={() => setToggle(!toggle)} />
    </ExampleLayout>
  );
};

export default Switches;
