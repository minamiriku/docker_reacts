import React from "react";
import BaseContents from "components/BaseContents";
import { PAGE_DESCRIPTION } from "utils/page";

const UseState = () => {
  const title = "useState";
  const displayPage = PAGE_DESCRIPTION.find((page) => page.title === title);

  return (
    <BaseContents title={title} descriptions={displayPage?.description}>
      useStateです
    </BaseContents>
  );
};

export default UseState;
