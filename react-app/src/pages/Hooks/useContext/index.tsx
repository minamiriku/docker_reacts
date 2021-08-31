import BaseContents from "components/BaseContents";
import { PAGE_DESCRIPTION } from "utils/page";

import CommonExample from "pages/Hooks/useContext/CommonExample";
// import Render from "./Render";

const UseContext = () => {
  const title = "useContext";
  const displayPage = PAGE_DESCRIPTION.find((page) => page.title === title);
  const Components = [CommonExample];

  return (
    <BaseContents title={title} descriptions={displayPage?.description}>
      {Components.map((Component, index) => (
        <Component key={index} />
      ))}
    </BaseContents>
  );
};

export default UseContext;
