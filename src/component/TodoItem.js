import React from "react";

const TodoItem = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li
      className={`flex items-center justify-between mb-2 p-2 border rounded ${
        task.completed ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="mr-3"
        />
        <span
          className={`${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
