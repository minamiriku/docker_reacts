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
