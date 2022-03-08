import { Provider } from "react-redux";
import BaseContents from "components/BaseContents";
import { PAGE_DESCRIPTION } from "utils/page";
import { store } from "redux/store";
import Counter from "pages/Redux/Counter";
import Users from "pages/Redux/Users";

const Redux = () => {
  const title = "Redux";
  const displayPage = PAGE_DESCRIPTION.find((page) => page.title === title);
  const Components = [Counter, Users];

  return (
    <Provider store={store}>
      <BaseContents title={title} descriptions={displayPage?.description}>
        {Components.map((Component, index) => (
          <Component key={index} />
        ))}
      </BaseContents>
    </Provider>
  );
};

export default Redux;
