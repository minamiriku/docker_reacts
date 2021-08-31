import React, { useState } from "react";
import ExampleLayout from "components/ExampleLayout";
import ComponentA from "pages/Hooks/useContext/CommonExample/ComponentA";

const COMMON_EXAMPLE_CODE = `
//親コンポーネント
import React, { useState } from "react";
import ExampleLayout from "components/ExampleLayout";
import ComponentA from "pages/Hooks/useContext/CommonExample/ComponentA";

export const UserCount = React.createContext<UserCountType>(defaultValue);

const CommonExample = () => {
  const [count, setCount] = useState(0);
  const value = { count, setCount };

  return (
    <ExampleLayout title="かんたんな例" codeString={COMMON_EXAMPLE_CODE}>
      <UserCount.Provider value={value}>
        <ComponentA />
      </UserCount.Provider>
    </ExampleLayout>
  );
};

export default CommonExample;

//子コンポーネントA
import React from "react";
import ComponentB from "pages/Hooks/useContext/CommonExample/ComponentB";

const ComponentA = () => {
  return (
    <div>
      <p>Componet A</p>
      <ComponentB />
    </div>
  );
};

export default ComponentA;


//孫コンポーネントB
import React from "react";
import ComponentC from "pages/Hooks/useContext/CommonExample/ComponentC";

const ComponentB = () => {
  return (
    <div>
      <p>Componet B</p>
      <ComponentC />
    </div>
  );
};

export default ComponentB;


//曾孫コンポーネントC
import React, { useContext } from "react";
import { UserCount } from "pages/Hooks/useContext/CommonExample";

const ComponentC = () => {
  const { count, setCount } = useContext(UserCount);

  return (
    <div>
      <p>Componet C</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default ComponentC;



`;

type UserCountType = {
  count: number;
  setCount: Function;
};

const defaultValue = {
  count: 0,
  setCount: () => {
    return;
  },
};

export const UserCount = React.createContext<UserCountType>(defaultValue);

const CommonExample = () => {
  const [count, setCount] = useState(0);
  const value = { count, setCount };

  return (
    <ExampleLayout title="かんたんな例" codeString={COMMON_EXAMPLE_CODE}>
      <UserCount.Provider value={value}>
        <ComponentA />
      </UserCount.Provider>
    </ExampleLayout>
  );
};

export default CommonExample;
