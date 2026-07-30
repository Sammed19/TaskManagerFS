import { useState, useEffect } from "react";
import { addTask, updateTask } from "../services/taskApi";
import { fetchTasks, setEditingTask } from "../features/taskSlice";
import { useDispatch, useSelector } from "react-redux";


function TaskForm() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  
  const editingTask = useSelector(
    state => state.tasks.editingTask
  );


  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTask]);



  const handleSubmit = async () => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (editingTask) {
        // Update existing task
        await updateTask(editingTask.id, {
          title,
          description,
        });
      } else {
        // Add new task
        await addTask({
          title,
          description,
          completed: false,
        });
      }

      dispatch(fetchTasks());

      setTitle("");
      setDescription("");
      dispatch(setEditingTask(null));
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>{editingTask ? "Update Task" : "Add Task"}</button>
    </div>
  );
}

export default TaskForm;