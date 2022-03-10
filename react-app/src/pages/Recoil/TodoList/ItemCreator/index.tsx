import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Input, Box, Button } from "@material-ui/core";
import { todoListState } from "recoil/atom";
import { useStyles } from "pages/Recoil/TodoList/Filter";

const ItemCreator = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: oldTodoList[oldTodoList.length - 1].id + 1,
        title: title,
        isComplete: false,
      },
    ]);
    setTitle("");
  };

  return (
    <Box>
      <Input
        type="text"
        value={title}
        onChange={handleChange}
        className={classes.white}
      />
      <Button onClick={addItem} className={classes.white}>
        Add
      </Button>
    </Box>
  );
};

export default ItemCreator;
