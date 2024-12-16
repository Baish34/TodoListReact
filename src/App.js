import React, { useState } from "react"; // Import React and useState hook
import "./App.css"; // Import styles from App.css

function App() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to hold the current input value
  const [taskInput, setTaskInput] = useState("");

  // Function to add a new task
  const handleAddTask = () => {
    if (taskInput.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: taskInput.trim() }]);
    setTaskInput("");
  };

  // Function to delete a task
  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // Function to edit a task
  const handleEditTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    const newTaskText = prompt("Edit your task:", taskToEdit.text);
    if (newTaskText && newTaskText.trim() !== "") {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, text: newTaskText.trim() } : task
      );
      setTasks(updatedTasks);
    } else {
      alert("Task cannot be empty!");
    }
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>React To-Do List</h1>

        {/* Input and Add Button */}
        <div className="todo-input-section">
          <input
            type="text"
            placeholder="Enter a new task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>

        {/* Task List */}
        <ul className="todo-list">
          {tasks.map((task) => (
            <li key={task.id} className="todo-item">
              <span>{task.text}</span>
              <div>
                <button className="edit-btn" onClick={() => handleEditTask(task.id)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
