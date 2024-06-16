export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div id="container">
      <img src="logo.png" alt="An empty task list" id="logo" />
      <h2 id="title">No Project Selected</h2>
      <p id="description">Select a project or get started with a new one</p>
      <p id="button-container">
        <button onClick={onStartAddProject}>Create new project</button>
      </p>
    </div>
  );
}
