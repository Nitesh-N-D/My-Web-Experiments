import API from "../services/api";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack
} from "@mui/material";

function TaskList({ tasks, refresh }) {

  const deleteTask = async (id) => {
    await API.delete(`/${id}`);
    refresh();
  };

  const markDone = async (id) => {
    await API.put(`/${id}`, { status: "Completed" });
    refresh();
  };

  return (
    <Stack spacing={2}>

      {tasks.map((task) => (

        <Card key={task._id} sx={{ borderRadius: 3 }}>

          <CardContent>

            <Typography variant="h6">
              {task.title}
            </Typography>

            <Typography color="text.secondary">
              {task.description}
            </Typography>

            <Chip
              label={task.status}
              color={task.status === "Completed" ? "success" : "warning"}
              sx={{ mt: 1 }}
            />

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>

              <Button
                variant="contained"
                color="success"
                onClick={() => markDone(task._id)}
              >
                Complete
              </Button>

              <Button
                variant="outlined"
                color="error"
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </Button>

            </Stack>

          </CardContent>

        </Card>

      ))}

    </Stack>
  );
}

export default TaskList;