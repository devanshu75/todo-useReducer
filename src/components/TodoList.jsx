import { useState } from "react";

const TodoList = ({ name, status, id, CompleteTask, deleteTask, editTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    editTask(id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow px-4 py-3 rounded border border-gray-200 flex items-center justify-between gap-4"
    >
      <div className="flex items-center gap-3 w-full">
        <input
          type="text"
          value={newName}
          onChange={handleChange}
          className="flex-grow border border-gray-400 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Edit task name"
          required
        />
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setEditing(false)}
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-3 py-1 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1 rounded"
        >
          Save
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <form className="bg-white shadow px-4 py-3 rounded border border-gray-200 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <input
          id={id}
          type="checkbox"
          className="accent-blue-600 w-4 h-4"
          checked={status}
          onChange={() => CompleteTask(id)}
        />
        <span className="text-gray-800">{name}</span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setEditing(true)}
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(id)}
          className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </form>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
};

export default TodoList;
