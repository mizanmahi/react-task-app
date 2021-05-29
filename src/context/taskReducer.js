export const taskReducer = (state, action) => {
   switch (action.type) {
      case "TOOGLE_ACTIVE":
         return {
            tasks: state.tasks.map((task, i) =>
               action.payload === task.id
                  ? {
                       ...task,
                       isActive: !task.isActive,
                       completed: !task.completed,
                    }
                  : task
            ),
            modifiedTask: "",
         };
      case "DELETE_TASK":
         return {
            tasks: state.tasks.filter((task, i) => action.payload !== task.id),
            modifiedTask: state.modifiedTask ? state.modifiedTask.filter((task, i) => action.payload !== task.id) : ""
         };
      case "SHOW_ALL":
         return {
            ...state,
            modifiedTask: "",
         };
      case "SHOW_COMPLETED":
         return {
            ...state,
            modifiedTask: state.tasks.filter((task) => task.completed),
         };
      case "SHOW_ACTIVE":
         return {
            ...state,
            modifiedTask: state.tasks.filter((task) => task.isActive),
         };
      case "ADD_TODO":
         return {
            tasks: [...state.tasks, action.payload],
         };
      default:
         return state;
   }
};
