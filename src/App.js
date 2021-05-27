import React, { useReducer } from "react";
import Tasks from "./components/tasks";
import { taskReducer } from "../src/context/taskReducer";
import "./App.css";

export const taskContext = React.createContext();

const INITIAL_STATE = {
   tasks: [
      {
         title: "Buy some programming books",
         isActive: true,
         completed: false,
      },
      {
         title: "Take a poer nap",
         isActive: true,
         completed: false,
      },
      {
         title: "Exercise 1 hours",
         isActive: true,
         completed: false,
      },
      {
         title: "Read quran for 2 hour",
         isActive: true,
         completed: false,
      },
   ],
};

function App() {
   const [state, dispatch] = useReducer(taskReducer, INITIAL_STATE);
   console.log(state);
   return (
      <taskContext.Provider value={{ state, dispatch }}>
         <div className="App">
            <Tasks />
         </div>
      </taskContext.Provider>
   );
}

export default App;
