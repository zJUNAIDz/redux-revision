import { createSlice, createAction, nanoid } from '@reduxjs/toolkit';

const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignedTo: ''
});
const initialState = [
  createTask('Complete Redux course'),
  createTask('enjoy ss after completion')
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createTask(action.payload));
    },
    toggle: (state, action) => {
      const item = state.find((task) => task.id === action.payload.taskId);
      item.completed = action.payload.completed;
    },
    assignToUser: (state, action) => {
      const item = state.find((task) => task.id === action.payload.taskId);
      item.assignedTo = action.payload.humanId;
    }
  }
});

//* making actions out of reducer property
export const taskToggle = createAction('tasks/toggle', (taskId, completed) => ({
  payload: { taskId, completed }
}));
