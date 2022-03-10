import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "recoil/atom";
import { COLOR_DEFINITIONS } from "utils/color";

export const useStyles = makeStyles(() =>
  createStyles({
    white: {
      color: COLOR_DEFINITIONS.MAIN.WHITE,
    },
    background: {
      backgroundColor: COLOR_DEFINITIONS.MAIN.WHITE,
    },
  })
);

const Filter = () => {
  const classes = useStyles();
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setFilter(event.target.value as string);
  };

  return (
    <FormControl>
      <InputLabel id="filter-label" className={classes.white}>
        Filter
      </InputLabel>
      <Select
        labelId="filter-label"
        id="filter"
        value={filter}
        label="Filter"
        onChange={handleChange}
        className={classes.background}
      >
        <MenuItem value="すべて">すべて</MenuItem>
        <MenuItem value="完了">完了</MenuItem>
        <MenuItem value="未完了">未完了</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filter;
