import BaseContents from "components/BaseContents";
import { PAGE_DESCRIPTION } from "utils/page";

import Switches from "./Switch";
import Sliders from "./Slider";

const UseState = () => {
  const title = "useState";
  const displayPage = PAGE_DESCRIPTION.find((page) => page.title === title);
  const Components = [Switches, Sliders];

  return (
    <BaseContents title={title} descriptions={displayPage?.description}>
      {Components.map((Component, index) => (
        <Component key={index} />
      ))}
    </BaseContents>
  );
};

export default UseState;
