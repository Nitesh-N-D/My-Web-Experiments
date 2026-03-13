import { useEffect, useState } from "react";
import API from "./services/api";

import Sidebar from "./components/SideBar";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import SearchBar from "./components/SearchBar";

import { Box, Toolbar, Typography, Paper } from "@mui/material";

function App() {

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/");
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchTasks = async (keyword) => {

    if (!keyword) {
      fetchTasks();
      return;
    }

    try {
      const res = await API.get(`/search/${keyword}`);
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f5f7fb", minHeight: "100vh" }}>

      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4
        }}
      >

        <Toolbar />

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 3, color: "#2c3e50" }}
        >
          Task Tracker Dashboard
        </Typography>

        <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
          <SearchBar onSearch={searchTasks} />
        </Paper>

        <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
          <TaskForm refresh={fetchTasks} />
        </Paper>

        <Paper sx={{ p: 3, borderRadius: 2 }}>
          <TaskTable tasks={tasks} refresh={fetchTasks} />
        </Paper>

      </Box>

    </Box>
  );
}
export default App;
