export const taskReducer = (state, action) => {
   switch (action.type) {
      case "TOOGLE_ACTIVE":
         return {
            tasks: state.tasks,
            modifiedTask: state.tasks.map((task, i) =>
               action.payload === i
                  ? {
                       ...task,
                       isActive: !task.isActive,
                       completed: !task.completed,
                    }
                  : task
            ),
         };
      case "DELETE_TASK":
         return {
            tasks: state.tasks,
            modifiedTask: state.tasks.filter((task, i) => action.payload !== i),
         };
      case "SHOW_ALL":
         return {
            tasks: state.tasks.filter((task) => true),
         };
      case "SHOW_COMPLETED":
         return {
            tasks: state.tasks.filter((task) => task.completed),
         };
      case "SHOW_ACTIVE":
         return {
            tasks: action.payload
               ? action.payload.tasks.filter((task) => task.isActive)
               : state.tasks.filter((task) => task.isActive),
         };
      case "ADD_TODO":
         return {
            tasks: [...state.tasks, action.payload],
         };
      default:
         return state;
   }
};
