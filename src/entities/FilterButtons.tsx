import {ButtonFilter} from "./ButtonFilter";

export type FilterValuesType = "all" | "start" | "end";

type PropsType = {
  filter: FilterValuesType
  changeFilter: (filter: FilterValuesType) => void;
}

export const FilterTaskButtons = (props: PropsType) => {
  const changeTodolistFilter = (filter: FilterValuesType) => {
    props.changeFilter(filter)
  }

  return (
    <div className={'filter'}>
      <ButtonFilter
        variant={props.filter === "all" ? "outlined" : "text"}
        name="All"
        color="secondary"
        // callback={()=>{}}
        callback={()=>changeTodolistFilter('all')}
      />
      <ButtonFilter
        variant={props.filter === "start" ? "outlined" : "text"}
        name="Active"
        color="secondary"
        callback={()=>changeTodolistFilter('start')}
      />
      <ButtonFilter
        variant={props.filter === "end" ? "outlined" : "text"}
        name="Completed"
        color="secondary"
        callback={()=>changeTodolistFilter('end')}
      />
    </div>
  );
};
