import { useState } from "react";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";

function App() {
  // ** In this project, 'name' is the unique identification of a task. To work properly, each task name must be different.
  // ** Stages: 0 represents the 'Backlog' stage, 1 represents the 'To Do' stage, 
  // 2 represents the 'Ongoing' stage, and 3 represents the 'Done' stage.
  const [tasks, setTasks] = useState([
    {
      name: 'Task 1',
      stage: 0
    },
    {
      name: 'Task 2',
      stage: 1
    },
    {
      name: 'Task 3',
      stage: 2
    },
    {
      name: 'Task 4',
      stage: 3
    }
  ])

  const nextStage = (task) => {
    const sorted = tasks.map((item) => item.name === task.name ? {...item, stage: (item.stage + 1)} : item);
    setTasks(sorted);
  }

  const previousStage = (task) => {
    const sorted = tasks.map((item) => item.name === task.name ? {...item, stage: (item.stage - 1)} : item);
    setTasks(sorted);
  }

  return (
    <div>
      <Header />
      <KanbanBoard tasks={tasks} nextStage={nextStage} previousStage={previousStage} />
    </div>
  );
}

export default App;
