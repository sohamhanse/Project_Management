export default function Sidebar({ addnweproject, projects, selectProject }) {
  return (
    <>
      <div id="sidebar">
        <h2>YOUR PROJECTS</h2>
        <div>
          <button onClick={addnweproject}>+ Add Project</button>
        </div>
        <ul className="mt-8">
          {projects.map((project) => (
            <li key={project.projectid}>
              <button
                onClick={() => selectProject(project.projectid)}
                className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
              >
                {project.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}


