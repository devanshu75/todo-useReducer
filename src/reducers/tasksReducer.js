import { nanoid } from "nanoid";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "addTask":
      return [
        ...state,
        {
          id: nanoid(),
          taskName: action.taskName,
          status: false,
        },
      ];

    case "completeTask":
      return state.map((task) =>
        task.id === action.id ? { ...task, status: !task.status } : task
      );

    case "deleteTask":
      return state.filter((task) => task.id !== action.id);

    case "editTask":
      return state.map((task) =>
        task.id === action.id ? { ...task, taskName: action.newName } : task
      );

    default:
      return state;
  }
};

export default taskReducer;
