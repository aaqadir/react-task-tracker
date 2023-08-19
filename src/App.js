import { React, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Task from "./components/TasksList";
import AddTask from "./components/AddTask";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const apiUrl =
    "https://my-json-server.typicode.com/aaqadir/json-server/tasks";
  // const apiUrl = "http://localhost:5000/tasks";

  useEffect(() => {
    const getAllTasks = async () => {
      const tasksFromServer = await fetchAllTasks();
      setTasks(tasksFromServer);
    };

    getAllTasks();
  }, []);

  // Fetch All Tasks
  const fetchAllTasks = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();

    return data;
  };

  // Fetch Task with id
  const fetchTask = async (id) => {
    const res = await fetch(`${apiUrl}/${id}`);
    const data = await res.json();

    return data;
  };

  //add task
  const addTaskApp = async (task) => {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTaskApp = async (id) => {
    console.log("delete: ", id);

    const res = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });

    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert("Error in Deleting this task");
  };

  //Toggle reminder
  const toggleReminderApp = async (id) => {
    console.log(id);

    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          onAdd={() => setShowAddForm(!showAddForm)}
          showAdd={showAddForm}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddForm && <AddTask onAdd={addTaskApp} />}
                {tasks.length > 0 ? (
                  <Task
                    tasks={tasks}
                    onDelete={deleteTaskApp}
                    onToggle={toggleReminderApp}
                  />
                ) : (
                  "No Task to display"
                )}
              </>
            }
          ></Route>

          <Route path="/about" element={<About></About>}></Route>
        </Routes>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

//when rendering from a calss intead of funtion in a component
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>;
//   }
// }

export default App;
