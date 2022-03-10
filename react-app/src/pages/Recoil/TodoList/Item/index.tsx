import { memo } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "recoil/atom";
import { ListItem, IconButton } from "@material-ui/core";
import { Delete, Check, Clear } from "@material-ui/icons";
import { useStyles } from "pages/Recoil/TodoList/Filter";

type Props = {
  list: {
    id: number;
    title: string;
    isComplete: boolean;
  };
};

const Item: React.FC<Props> = memo(({ list }) => {
  const classes = useStyles();
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const toggleItemCompletion = () => {
    const index = todoList.findIndex((listItem) => listItem.id === list.id);
    const newTodoList = [
      ...todoList.slice(0, index),
      { ...list, isComplete: !list.isComplete },
      ...todoList.slice(index + 1),
    ];
    setTodoList(newTodoList);
  };

  const deleteItem = () => {
    const index = todoList.findIndex((listItem) => listItem.id === list.id);
    const newTodoList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];
    setTodoList(newTodoList);
  };

  return (
    <ListItem key={list.id}>
      <IconButton onClick={toggleItemCompletion} className={classes.white}>
        {list.isComplete ? <Check /> : <Clear />}
      </IconButton>
      {list.title}
      <IconButton onClick={deleteItem} className={classes.white}>
        <Delete />
      </IconButton>
    </ListItem>
  );
});

export default Item;
