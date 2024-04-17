import {ChangeStatus, taskReducer} from "./reducer";

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

  const newStatus = {id: '2', status: 'end'}
  const endState = taskReducer(startState, ChangeStatus(newStatus));

  expect(endState[0].status).toBe("start");
  console.log(endState[1])
  expect(endState[1].status).toBe('end');
});

// test("add new task", () => {
//   const startState = [
//     {
//       id: "1",
//       title: "Поспать",
//       status: "start"
//     },
//     {
//       id: "2",
//       title: "Купить молоко",
//       status: "start"
//     },
//     {
//       id: "3",
//       title: "Попить кофе",
//       status: "start"
//     },
//   ]
//
//   const newStatus = {id: '2', status: 'end'}
//   const endState = taskReducer(startState, ChangeStatus(newStatus));
//
//   expect(endState[0].status).toBe("start");
//   console.log(endState[1])
//   expect(endState[1].status).toBe('end');
// });

