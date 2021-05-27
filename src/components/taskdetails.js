import { useContext } from "react";
import { taskContext } from "../App";

const TaskDetails = () => {
   const { state, dispatch } = useContext(taskContext);
   return (
      <div className="details">
         <li>
            <span className="details-btn" onClick={() => dispatch({type: "SHOW_ALL"})}>
               ALL{" "} <span className="details-num">{state.tasks.length}</span>
            </span>
            <span className="details-btn">
               Active{" "}
               <span className="details-num">
                  {state.tasks.filter((task) => task.isActive).length}
               </span>
            </span>
            <span className="details-btn" onClick={() => {
                dispatch({type:"SHOW_COMPLETED"})
            }}>
               Completed{" "}
               <span className="details-num">
                  {state.tasks.filter((task) => !task.isActive).length}
               </span>
            </span>
         </li>
      </div>
   );
};

export default TaskDetails;
