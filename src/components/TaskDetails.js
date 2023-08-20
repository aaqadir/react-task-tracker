import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";

function TaskDetails() {
  const [loading, setLoading] = useState(true);
  const [task, setTasks] = useState({});
  const [error, setError] = useState(null);
  const apiUrl =
    "https://my-json-server.typicode.com/aaqadir/json-server/tasks";

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`${apiUrl}/${params.id}`);
      const data = await res.json();

      setTasks(data);
      setLoading(false);
    };
    fetchTask();
  });

  return loading ? (
    <h3>loading...</h3>
  ) : (
    <div>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <Button
        text="Go Back"
        onClickHeader={() => {
          navigate(-1);
        }}
      ></Button>
    </div>
  );
}

export default TaskDetails;
