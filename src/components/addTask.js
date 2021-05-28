import { useContext, useState } from "react";
import { taskContext } from "../App";

const AddTask = () => {
   const { dispatch } = useContext(taskContext);
   const [title, setTitle] = useState("");

   const submitHandler = (e) => {
       e.preventDefault();
       if(title.trim().length === 0){
          return;
       }
       const newTask = {
           title,
           isActive: true,
           completed: false
       }
       dispatch({type: "ADD_TODO", payload: newTask})
       setTitle("")
   }

   return (
      <div className="form">
         <form action="#" onSubmit={submitHandler}>
            <input
               type="text"
               name="title"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               placeholder="Create a new task..."
            />
            <button className="add-btn" type="submit">ADD</button>
         </form>
      </div>
   );
};

export default AddTask;
