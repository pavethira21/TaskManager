import NewTask from "./component/NewTask.jsx";
import NoneSelected from "./component/NoneSelected.jsx";
import ProjectManager from "./component/ProjectManager.jsx";
import { useState } from "react";
import SelectedProject from "./component/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState ] = useState({
    selectedProjectId:undefined,
    projects:[],
    tasks:[]
  })
  
  function handleAddTask(text){
    setProjectState((prevState) => {
      const taskId =Math.random();
      const newTask={
        text:text,
        projectId:prevState.selectedProjectId,
        id:taskId,
      };
      return{
        ...prevState,
        tasks: [newTask,...prevState.tasks]

      };
    });
  }
  
  function handleDeleteTask(id){
    setProjectState(prevState => {
      return{
        ...prevState,
        
        tasks: prevState.tasks.filter(
          (task) => task.id !== id),
         
      };
    });
  }

  function handleStartAddProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null,

      };
    });
  }

  function handleCancel(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,

      };
    });
  }

  function handleDeletePro(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId),
         
      };
    });

  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const newProject={
        ...projectData,
        id:Math.random()
      };
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject],

      };
    });
  }

  function handleSelectProject(id){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: id,

      };
    });
  }
  
  const selectProject = projectState.projects.find(project => project.id ===projectState.selectedProjectId)

  let content =<SelectedProject project={selectProject} 
  onDelete={handleDeletePro} 
  onAddTask={handleAddTask} 
  onDeleteTask={handleDeleteTask}
  tasks={projectState.tasks}
  />;

  if(projectState.selectedProjectId ===null){
    content=<NewTask onAdd={handleAddProject} onCancel={handleCancel}/>
  }
  else if (projectState.selectedProjectId ===undefined){
    content =<NoneSelected onStart ={handleStartAddProject}/>
  }


  return (
    <>
      <main className="h-screen my-8 flex">
        <ProjectManager onStart ={handleStartAddProject}  
        projects={projectState.projects}
        onSelect={handleSelectProject}
        selectedPId={projectState.selectedProjectId}
        />
        
        {content}
        
      </main>
    </>
  );
}

export default App;
