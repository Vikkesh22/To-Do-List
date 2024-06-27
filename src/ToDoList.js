import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewtask] = useState("");

  function handleInputChange(evevt) {
    setNewtask(evevt.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewtask("");
    }
  }
  function deleteTask(index) {
    const updtatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updtatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updtatedTasks = [...tasks];
      ([updtatedTasks[index], updtatedTasks[index - 1]] = [
        updtatedTasks[index - 1],
        updtatedTasks[index],
      ]),
        setTasks(updtatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updtatedTasks = [...tasks];
      ([updtatedTasks[index], updtatedTasks[index + 1]] = [
        updtatedTasks[index + 1],
        updtatedTasks[index],
      ]),
        setTasks(updtatedTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              UP
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
