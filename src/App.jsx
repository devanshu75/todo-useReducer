import "./App.css";

import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import data from "./utils/taskData";
import taskReducer from "./reducers/tasksReducer";

import { useEffect, useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(taskReducer, data);

  function addTask(name) {
    dispatch({
      type: "addTask",
      taskName: name,
    });
  }

  function CompleteTask(id) {
    dispatch({
      type: "completeTask",
      id,
    });
  }

  function deleteTask(id) {
    dispatch({
      type: "deleteTask",
      id,
    });
  }

  function editTask(id, newName) {
    dispatch({
      type: "editTask",
      id,
      newName,
    });
  }

  useEffect(() => {
    console.log(state);
  }, [state]);

  const taskList = state.map((task) => (
    <TodoList
      key={task.id}
      name={task.taskName}
      status={task.status}
      id={task.id}
      CompleteTask={CompleteTask}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const numberOfTask = state.length;

  return (
    <div className="container min-h-screen bg-gray-50">
      <div className="todo-App mx-auto min-h-screen flex flex-col justify-center items-center gap-5 px-4">
        <h1 className="text-4xl font-semibold text-center py-4 text-gray-800">
          Todo App with useState
        </h1>
        <TodoInput addTask={addTask} />
        <p className="text-xl font-semibold">
          Total Number Of Task
          <span className="text-red-700"> {numberOfTask}</span>
        </p>
        <div className="todo-list w-full max-w-md mt-6">
          <ul className="space-y-2">{taskList}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
