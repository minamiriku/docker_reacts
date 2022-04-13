import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "recoil/selector";
import { List, Typography } from "@material-ui/core";
import TodoListFilter from "pages/Recoil/TodoList/Filter";
import TodoListItem from "pages/Recoil/TodoList/Item";
import TodoListItemCreator from "pages/Recoil/TodoList/ItemCreator";
import TodoListStatus from "pages/Recoil/TodoList/Status";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <Typography variant="h3">RecoilによるTodoアプリ</Typography>
      <TodoListStatus />
      <TodoListFilter />
      <TodoListItemCreator />
      <List>
        {todoList.map((list) => (
          <TodoListItem key={list.id} list={list} />
        ))}
      </List>
    </>
  );
};

export default TodoList;
