import { deleteTask } from "../services/taskApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, setEditingTask } from "../features/taskSlice";
import { Link } from "react-router-dom";


function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      dispatch(fetchTasks());
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (task) => {
    console.log(`Edit task with id: ${task}`);
    // Implement edit functionality here
    dispatch(setEditingTask(task)); // Set the task to be edited in the parent component
  }

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((item) => (
          <div key={item.id}>
            <li >{item.title}</li>
            <li >{item.description}</li>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <Link to={`/tasks/${item.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;