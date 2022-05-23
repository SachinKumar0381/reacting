import React from "react";

import styles from "./taskApp.module.css";
import Header from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <Header/>
      <AddTask/>
      <Tasks/>
         </div>
  );
};

export default TaskApp;
