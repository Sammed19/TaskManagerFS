import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Home = () => {
  return (
    <main className="home-page">
      <header className="home-header">
        <p className="home-eyebrow">YOUR PERSONAL WORKSPACE</p>
        <h1>Make room for what matters.</h1>
        <p className="home-intro">
          Capture your tasks, keep the details close, and make progress one step
          at a time.
        </p>
      </header>
      <div className="home-content">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default Home;