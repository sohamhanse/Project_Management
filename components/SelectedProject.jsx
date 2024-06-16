import Task from "./Tasks";

export default function SelectedProject({
  project,
  onDelete,
  addTask,
  deleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.deudate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div id="selectpro">
      <header>
        <div id="header-top">
          <h1 id="selectprotitle">{project.title}</h1>
          <button onClick={onDelete} id="selectprodelete-button">
            Delete
          </button>
        </div>
        <p id="selectprodate">{formattedDate}</p>
        <p id="selectprodescription">{project.description}</p>
      </header>
      <Task onadd={addTask} tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}
