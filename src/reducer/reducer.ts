import {v1} from "uuid";

export type Item = {
  id: string;
  title: string;
  status: string;
}

const initialState: Item[] = [
  {
    id: "3",
    title: "Поспать",
    status: "end"
  },
  {
    id: "f0eb1088-6db9-4fd9-9e34-d723b643fc92",
    title: "Купить молоко",
    status: "start"
  },
  {
    id: "ea042921-c983-4932-a60c-c5ab9052df28",
    title: "Попить кофе",
    status: "end"
  },
]

type ActionType = AddTaskType | DeleteTaskType | ChangeStatusType

export const taskReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "ADD-TASK":
      const newTask: Item = {id: v1(), title: action.payload.title, status: 'start'};
      return [...state, newTask]
    case "DELETE-TASK": {
      return state.filter((el) => el.id !== action.payload.id)
    }
    case "CHANGE-STATUS": {
      let newStatus = 'start'
      if (action.payload.props.status === 'start') {
        newStatus = 'end'
      }
      return state.map((el) => el.id === action.payload.props.id ? {...el, status: newStatus} : el)
    }
    default:
      return state
  }
}

export type AddTaskType = ReturnType<typeof AddTask>
export const AddTask = (title: string) => {
  return {
    type: 'ADD-TASK',
    payload: {title}
  } as const
}

export type DeleteTaskType = ReturnType<typeof DeleteTask>
export const DeleteTask = (id: string) => {
  return {
    type: 'DELETE-TASK',
    payload: {id}
  } as const
}

export type ChangeStatusType = ReturnType<typeof ChangeStatus>
export const ChangeStatus = (props: {id: string, status: string}) => {
  return {
    type: 'CHANGE-STATUS',
    payload: {props}
  } as const
}

