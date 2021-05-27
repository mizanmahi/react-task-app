export const taskReducer = (state, action) => {
    switch (action.type) {
       case "TOOGLE_ACTIVE":
          return {
             tasks: state.tasks.map((task, i) =>
                action.payload === i
                   ? { ...task, isActive: !task.isActive }
                   : task
             ),
          };
       case "DELETE_TASK":
          return {
             tasks: state.tasks.filter((task, i) => action.payload !== i),
          };
          case "SHOW_ALL":
            return {
                tasks: state.tasks.filter(task => true)
            }
        case "SHOW_COMPLETED":
            return {
                tasks: state.tasks.filter(task => !task.isActive)
            }
       default:
          return state;
    }
 };