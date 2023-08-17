import { React, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Task from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "May 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "May 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "May 7th at 12:30pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Attend Class",
      day: "May 8th at 12:30pm",
      reminder: false,
    },
    {
      text: "asdfdsf",
      day: "dsfsfsfdsfdsf",
      reminder: true,
      id: 5,
    },
  ]);

  //Delete Task
  const deleteTaskApp = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Task
          tasks={tasks}
          onDelete={deleteTaskApp}
          onToggle={toggleReminder}
        />
      ) : (
        "No Task to display"
      )}
    </div>
  );
}

//when rendering from a calss intead of funtion in a component
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>;
//   }
// }

export default App;
