import {AddTask, ChangeStatus, DeleteTask, taskReducer} from "./reducer";

test("correct filter of todolist should be changed", () => {
  const startState = [
    {
      id: "1",
      title: "Поспать",
      status: "start"
    },
    {
      id: "2",
      title: "Купить молоко",
      status: "start"
    },
    {
      id: "3",
      title: "Попить кофе",
      status: "start"
    },
  ]

  const newStatus = {id: '2', status: 'start'}
  const endState = taskReducer(startState, ChangeStatus(newStatus));

  expect(endState[0].status).toBe("start");
  expect(endState[1].status).toBe('end');
});

test("add new task", () => {
  const startState = [
    {
      id: "1",
      title: "Поспать",
      status: "start"
    },
    {
      id: "2",
      title: "Купить молоко",
      status: "start"
    },
    {
      id: "3",
      title: "Попить кофе",
      status: "start"
    },
  ]

  const endState = taskReducer(startState, AddTask('Сделать дз'))

  expect(endState.length).toBe(4);
  expect(endState[3].title).toBe('Сделать дз');
});

test("delete task", () => {
  const startState = [
    {
      id: "1",
      title: "Поспать",
      status: "start"
    },
    {
      id: "2",
      title: "Купить молоко",
      status: "start"
    },
    {
      id: "3",
      title: "Попить кофе",
      status: "start"
    },
  ]

  const endState = taskReducer(startState, DeleteTask('3'))

  expect(endState.length).toBe(2);
});


