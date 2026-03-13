import { Drawer, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
const drawerWidth = 220;

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box"
        }
      }}
    >
      <Toolbar />

      <List>

        <ListItemButton>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Tasks" />
        </ListItemButton>

        <ListItemButton>
          <ListItemText primary="Completed" />
        </ListItemButton>

      </List>

    </Drawer>
  );
}

export default Sidebar;
