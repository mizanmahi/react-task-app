import { useContext } from "react";
import { TaskContext } from "../context/taskContext";
import deleteIcon from "../delete-itcon.svg";
import TaskDetails from "./taskdetails";

const Task = () => {
   const { state, dispatch } = useContext(TaskContext);
   const modifiedTask = state.modifiedTask ? state.modifiedTask : state.tasks;
   return (
      <ul className="task">
         {modifiedTask.map((task, i) => {
            return (
               <li
                  key={i}
                  onClick={() =>
                     dispatch({ type: "TOOGLE_ACTIVE", payload: task.id })
                  }
                  className={`${task.isActive ? "" : "completed"}`}
               >
                  <span>{task.title}</span>
                  <img
                     src={deleteIcon}
                     alt="delete-icon"
                     className="delete-icon"
                     onClick={(e) => {
                        e.stopPropagation();
                        dispatch({ type: "DELETE_TASK", payload: task.id });
                     }}
                  />
               </li>
            );
         })}
         <TaskDetails />
      </ul>
   );
};

export default Task;
