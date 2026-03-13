import API from "../services/api";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from "@mui/material";

function TaskTable({ tasks, refresh }) {

  const deleteTask = async (id) => {
    await API.delete(`/${id}`);
    refresh();
  };

  const completeTask = async (id) => {
    await API.put(`/${id}`, { status: "Completed" });
    refresh();
  };

  return (
    <Table>

      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>

        {tasks.map((task) => (
          <TableRow key={task._id}>

            <TableCell>{task.title}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.status}</TableCell>

            <TableCell>

              <Button
                color="success"
                onClick={() => completeTask(task._id)}
              >
                Complete
              </Button>

              <Button
                color="error"
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </Button>

            </TableCell>

          </TableRow>
        ))}

      </TableBody>

    </Table>
  );
}

export default TaskTable;
