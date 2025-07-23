import { useState } from "react";

const TodoInput = ({ addTask }) => {
  const [name, setName] = useState(" ");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();

    if (name === " ") {
      setError(true);
    } else {
      addTask(name);
      setName(" ");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="todo-input flex flex-wrap gap-3 items-center w-full max-w-md"
    >
      <input
        type="text"
        name="task"
        placeholder="Enter a new task..."
        className="flex-grow border border-gray-400 rounded px-3 py-2 placeholder:italic placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleChange}
        value={name}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
      >
        Add Task
      </button>
      <p className="text-red-700">{error ? "Field Cannot be empty" : ""}</p>
    </form>
  );
};

export default TodoInput;
