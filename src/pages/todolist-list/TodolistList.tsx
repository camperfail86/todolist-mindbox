import { FullInput } from "../../entities/FullInput";
import {ButtonDelete} from "../../entities/ButtonDelete";
import {FilterTaskButtons, FilterValuesType} from "../../entities/FilterButtons";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../store/store";
import {ChangeStatus, DeleteTask, Item} from "../../reducer/reducer";
import {Checkbox} from "@mui/material";
import {useState} from "react";

export const TodolistList = () => {
    const dispatch = useDispatch()
    const [filter, setFilter] = useState<FilterValuesType>('all')
    const deleteTask = (itemId: string) => {
      dispatch(DeleteTask(itemId))
    }

    const changeFilter = (filter: FilterValuesType) => {
      setFilter(filter)
    }

    const onChangeHandler = (id: string, status: string) => {
      dispatch(ChangeStatus({id, status}))
    }

    let items = useSelector<rootReducerType, Item[]>((state) => state.tasks)
    let tasksForTodolist = items
    if (filter === "start") {
      tasksForTodolist = tasksForTodolist.filter((t) => t.status === 'start');
    }
    if (filter === "end") {
      tasksForTodolist = tasksForTodolist.filter((t) => t.status === 'end');
    }

    return (
        <div className='todolist'>
            <div style={{ padding: "20px 0 10px 0" }}>
                <FullInput/>
            </div>
            <div className='todolists'>
            <ul
                className='columns'>
                <h3>Тудулист</h3>
                {tasksForTodolist?.map((b: Item) =>
                    <li key={b.id} className={'item'}
                    >
                      <Checkbox
                        size={"small"}
                        onChange={()=>{onChangeHandler(b.id, b.status)}}
                        checked={b.status === 'end'}
                        color="secondary"
                      />
                        <span className='item-text'>{b.title}</span>
                        <ButtonDelete callback={()=>deleteTask(b.id)}/>
                </li>)}
            </ul>
            </div>
            <FilterTaskButtons filter={filter} changeFilter={changeFilter}/>
        </div>
    );
};
