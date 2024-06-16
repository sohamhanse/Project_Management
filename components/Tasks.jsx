import { useState } from "react";

export default function Task({ onDelete, onadd, tasks }) {
  const [newtask, setnewtask] = useState("");

  function handleChange(event) {
    setnewtask(event.target.value);
  }

  function handleclick() {
    onadd(newtask);
    setnewtask("");
  }

  return (
    <div id="task">
      <h3>Tasks</h3>
      <span>
        <input
          id="inputfield"
          type="text"
          onChange={handleChange}
          value={newtask}
        />
        <button id="button-2" onClick={handleclick}>
          Add Task
        </button>
      </span>
      {tasks.length === 0 && <p>This project does not have any tasks yet.</p>}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li id="tasklist" key={task.taskid}>
              <span>{task.task}</span>
              <button onClick={() => onDelete(task.taskid)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
