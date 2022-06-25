import React, { useReducer } from 'react';

import Tasks from './components/tasks';
import { taskReducer } from '../src/context/taskReducer';
import AddTask from './components/addTask';
import Footer from './components/footer';

import './App.css';
import { TaskContext } from './context/taskContext';

const INITIAL_STATE = {
   tasks: [
      {
         title: 'Buy some programming books',
         isActive: true,
         completed: false,
         id: 2569,
      },
      {
         title: 'Take a power nap',
         isActive: true,
         completed: false,
         id: 9587,
      },
      {
         title: 'Exercise 1 hours',
         isActive: true,
         completed: false,
         id: 5478,
      },
      {
         title: 'Read quran for 2 hour',
         isActive: true,
         completed: false,
         id: 9846,
      },
   ],
   modifiedTask: '',
};

function App() {
   const [state, dispatch] = useReducer(taskReducer, INITIAL_STATE);
   return (
      <TaskContext.Provider value={{ state, dispatch }}>
         <div className='App'>
            <div className='top'></div>
            <div className='bottom'></div>
            <AddTask />

            <h1 className='all-task'>Task!</h1>

            <Tasks />
            <Footer />
         </div>
      </TaskContext.Provider>
   );
}

export default App;
