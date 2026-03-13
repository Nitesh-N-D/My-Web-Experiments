import { useState } from "react";
import API from "../services/api";
import { TextField, Button, Box } from "@mui/material";

function TaskForm({ refresh }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/add", { title, description });

    setTitle("");
    setDescription("");

    refresh();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 2, mb: 3 }}
    >

      <TextField
        label="Task Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Add Task
      </Button>

    </Box>
  );
}

export default TaskForm;
