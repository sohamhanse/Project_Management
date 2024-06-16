import Sidebar from "../components/Sidebar";
import AddNewProject from "../components/AddNewProject";
import NoProjectSelected from "../components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "../components/SelectedProject";

function App() {
  const [show, setshow] = useState({
    projectstatus: undefined,
    projects: [],
    tasks: [],
  });

  function handleTaskadd(task) {
    const currtask = {
      task: task,
      taskid: Math.random(),
    };
    setshow((prev) => {
      return {
        ...prev,
        tasks: [currtask, ...prev.tasks],
      };
    });
  }

  function handleTaskdelete(id) {
    setshow((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.taskid !== id),
    }));
  }

  function handleSelectedProject(id) {
    setshow((prev) => ({
      ...prev,
      projectstatus: id,
    }));
  }

  function handleNewproject() {
    setshow((prev) => ({
      ...prev,
      projectstatus: null,
    }));
  }

  function closenewproject() {
    setshow((prev) => ({
      ...prev,
      projectstatus: undefined,
    }));
  }

  function handleDeleteProject() {
    setshow((prevState) => ({
      ...prevState,
      projectstatus: undefined,
      projects: prevState.projects.filter(
        (project) => project.projectid !== prevState.projectstatus
      ),
    }));
  }

  function handlesave(projectdata) {
    const currprojectdata = {
      ...projectdata,
      projectid: Math.random(),
    };
    setshow((prev) => {
      return {
        ...prev,
        projectstatus: undefined,
        projects: [...prev.projects, currprojectdata],
      };
    });
  }

  const selectedProject = show.projects.find(
    (project) => project.projectid === show.projectstatus
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      addTask={handleTaskadd}
      deleteTask={handleTaskdelete}
      tasks={show.tasks}
    />
  );

  if (show.projectstatus === undefined) {
    content = <NoProjectSelected onStartAddProject={handleNewproject} />;
  } else if (show.projectstatus === null) {
    content = (
      <AddNewProject
        shownewproject={show}
        closenewproject={closenewproject}
        onsave={handlesave}
      />
    );
  }

  return (
    <main id="mainpage">
      <Sidebar
        addnweproject={handleNewproject}
        projects={show.projects}
        selectProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
