import {taskReducer} from "../reducer/reducer";
import {combineReducers, legacy_createStore} from "redux";

export const rootReducer = combineReducers({
  tasks: taskReducer,
})
export type rootReducerType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer);

store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()))
})
