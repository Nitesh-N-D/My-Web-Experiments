import { useEffect, useState } from "react";
import API from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";

import { Container, Typography } from "@mui/material";

function App() {

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/");
    setTasks(res.data);
  };

  const searchTasks = async (keyword) => {

    if (keyword === "") {
      fetchTasks();
      return;
    }

    const res = await API.get(`/search/${keyword}`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>

      <Typography variant="h4" gutterBottom>
        Task Tracker Dashboard
      </Typography>

      <SearchBar onSearch={searchTasks} />

      <TaskForm refresh={fetchTasks} />

      <TaskList tasks={tasks} refresh={fetchTasks} />

    </Container>
  );
}

export default App;