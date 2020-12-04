import React from "react";

export const NewTaskInput = ({ addTask }) => {
  const [task, setTask] = React.useState("");

  const updateTask = (event) => {
    setTask(event.target.value);
  };

  const onAddTaskClick = () => {
    addTask(task);
    setTask("");
  };

  return (
    <div>
      <input
        onChange={updateTask}
        value={task}
        type="text"
        name="task"
        placeholder="Fold your clothes"
      />
      <button onClick={onAddTaskClick}>Add task</button>
    </div>
  );
};