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
    <section className="task-list-card">
      <div className="task-list-heading">
        <div>
          <p className="task-list-eyebrow">YOUR WORKLOAD</p>
          <h2>Tasks</h2>
        </div>
        <span className="task-count">{tasks.length}</span>
      </div>
      <ul className="task-list">
        {tasks.map((item) => (
          <li className="task-item" key={item.id}>
            <div className="task-item-copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="task-item-actions">
              <button className="task-action" onClick={() => handleEdit(item)}>Edit</button>
              <button className="task-action task-action-delete" onClick={() => handleDelete(item.id)}>Delete</button>
              <Link className="task-details-link" to={`/tasks/${item.id}`}>
                Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskList;