import { RecoilRoot } from "recoil";
import BaseContents from "components/BaseContents";
import { PAGE_DESCRIPTION } from "utils/page";
import TodoList from "pages/Recoil/TodoList";

const Recoil = () => {
  const title = "Recoil";
  const displayPage = PAGE_DESCRIPTION.find((page) => page.title === title);
  const Components = [TodoList];

  return (
    <RecoilRoot>
      <BaseContents title={title} descriptions={displayPage?.description}>
        {Components.map((Component, index) => (
          <Component key={index} />
        ))}
      </BaseContents>
    </RecoilRoot>
  );
};

export default Recoil;
