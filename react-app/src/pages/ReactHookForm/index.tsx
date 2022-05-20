import BaseContents from "components/BaseContents";
import { PAGE_DESCRIPTION } from "utils/page";
import BasicForm from "pages/ReactHookForm/BasicForm";
import Validation from "pages/ReactHookForm/Validation";
import AlreadyForm from "pages/ReactHookForm/AlreadyForm";
import UILibrary from "pages/ReactHookForm/UILibrary";

const Redux = () => {
  const title = "React-Hook-Form";
  const displayPage = PAGE_DESCRIPTION.find((page) => page.title === title);
  const Components = [BasicForm, Validation, AlreadyForm, UILibrary];

  return (
    <BaseContents title={title} descriptions={displayPage?.description}>
      {Components.map((Component, index) => (
        <Component key={index} />
      ))}
    </BaseContents>
  );
};

export default Redux;
