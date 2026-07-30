import { useParams } from "react-router-dom";

function TaskDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Task Details</h1>
      <h2>Task ID: {id}</h2>
    </div>
  );
}

export default TaskDetails;