import BaseContents from "components/BaseContents";
import { PAGE_DESCRIPTION } from "utils/page";
import Form from "pages/ReactHookForm/Form";

const Redux = () => {
  const title = "React-Hook-Form";
  const displayPage = PAGE_DESCRIPTION.find((page) => page.title === title);
  const Components = [Form];

  return (
    <BaseContents title={title} descriptions={displayPage?.description}>
      {Components.map((Component, index) => (
        <Component key={index} />
      ))}
    </BaseContents>
  );
};

export default Redux;
