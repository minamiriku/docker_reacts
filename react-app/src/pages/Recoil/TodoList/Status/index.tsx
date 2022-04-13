import { useRecoilValue } from "recoil";
import { List, ListItem } from "@material-ui/core";
import { todoListStatusState } from "recoil/selector";

const Status = () => {
  const { total, completedTotal, uncompletedTotal } =
    useRecoilValue(todoListStatusState);

  return (
    <List>
      <ListItem>Todoの登録数: {total}</ListItem>
      <ListItem>完了の数: {completedTotal}</ListItem>
      <ListItem>未完了の数: {uncompletedTotal}</ListItem>
    </List>
  );
};

export default Status;
