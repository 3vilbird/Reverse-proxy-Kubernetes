import React, { useState, useEffect, useCallback } from "react";

import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(function () {
    fetch("/api/tasks", {
      // fetch("http://localhost:8000/tasks", {
      headers: {
        Authorization: "Bearer abc",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        if (jsonData.tasks) setTasks(jsonData.tasks);
      });
  }, []);

  useEffect(
    function () {
      fetchTasks();
    },
    [fetchTasks]
  );

  return (
    <div className="App">
      <section>
        <button onClick={fetchTasks}>Fetch Tasks</button>
        {tasks.length > 0 && <TaskList tasks={tasks} />}
      </section>
    </div>
  );
}

export default App;
