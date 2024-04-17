import './index.css'
import {store} from "./store/store";
import {TodolistList} from "./pages/todolist-list/TodolistList";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodolistList />
      </div>
    </Provider>
  );
}

export default App;
