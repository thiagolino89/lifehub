import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

const menu = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Objetivos",
    path: "/objetivos",
  },
  {
    label: "Histórico",
    path: "/historico",
  },
  {
    label: "Estatísticas",
    path: "/estatisticas",
  },
  {
    label: "Configurações",
    path: "/configuracoes",
  },
];

export default function Sidebar() {
  const location = useLocation();

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
          <ListItemButton
            key={item.path}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}