import { selector } from "recoil";
import { todoListState, todoListFilterState } from "./atom";

export const todoListStatusState = selector({
  key: "todoListStatusState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const total = todoList.length;
    const completedTotal = todoList.filter((list) => list.isComplete).length;
    const uncompletedTotal = total - completedTotal;

    return {
      total,
      completedTotal,
      uncompletedTotal,
    };
  },
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case "完了":
        return list.filter((item) => item.isComplete);
      case "未完了":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
