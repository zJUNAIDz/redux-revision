import { createSlice, nanoid } from '@reduxjs/toolkit';

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
  add: (state, action) => {
    state.push(createTask(action.payload));
  }
});
