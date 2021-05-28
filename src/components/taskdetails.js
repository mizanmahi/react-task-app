import { useContext, useState } from "react";
import { taskContext } from "../App";

const TaskDetails = () => {
   const { state, dispatch } = useContext(taskContext);
   const [currState, setCurrState] = useState(null);
   console.log(currState);
   return (
      <div className="details">
         <li>
            <span
               className="details-btn"
               onClick={() => dispatch({ type: "SHOW_ALL" })}
            >
               ALL <span className="details-num">{state.tasks.length}</span>
            </span>
            <span
               className="details-btn"
               onClick={() =>
                  dispatch({ type: "SHOW_ACTIVE", payload: currState })
               }
            >
               Active{" "}
               <span className="details-num">
                  {state.tasks.filter((task) => task.isActive).length}
               </span>
            </span>
            <span
               className="details-btn"
               onClick={() => {
                  setCurrState(state);
                  dispatch({ type: "SHOW_COMPLETED", payload: currState });
               }}
            >
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
