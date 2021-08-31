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
