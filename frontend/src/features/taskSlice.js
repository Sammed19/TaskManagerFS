import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks } from "../services/taskApi";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async () => {
    const data = await getTasks();
    return data;
  }
);

const initialState = {
  tasks: [],
  editingTask: null,
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },

    setEditingTask: (state, action) => {
      state.editingTask = action.payload;
    },
   
  },
   extraReducers: (builder) => {
  builder

    .addCase(fetchTasks.pending, (state) => {
      state.loading = true;
      state.error = null;
    })

    .addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = action.payload;
    })

    .addCase(fetchTasks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
},
});



export const { setTasks, setEditingTask } = taskSlice.actions;

export default taskSlice.reducer;