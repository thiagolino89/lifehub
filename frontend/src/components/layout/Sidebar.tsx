import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

const drawerWidth = 240;

const menu = [
  "Dashboard",
  "Objetivos",
  "Histórico",
  "Estatísticas",
  "Configurações",
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <List>
        {menu.map((item) => (
          <ListItemButton key={item}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}