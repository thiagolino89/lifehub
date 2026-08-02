import {
  Assessment,
  Dashboard,
  EmojiEvents,
  History,
  Settings,
} from "@mui/icons-material";

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";

const drawerWidth = 260;

const menu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <Dashboard />,
  },
  {
    label: "Objetivos",
    path: "/objetivos",
    icon: <EmojiEvents />,
  },
  {
    label: "Histórico",
    path: "/historico",
    icon: <History />,
  },
  {
    label: "Estatísticas",
    path: "/estatisticas",
    icon: <Assessment />,
  },
  {
    label: "Configurações",
    path: "/configuracoes",
    icon: <Settings />,
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
          borderRight: "1px solid #E5E7EB",
        },
      }}
    >
      <Toolbar />

      <Box sx={{ px: 3, py: 2 }}>
        <Typography variant="h5" fontWeight="bold">
          LifeHub
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Organize seus objetivos
        </Typography>
      </Box>

      <List sx={{ px: 1 }}>
        {menu.map((item) => (
          <ListItemButton
            key={item.path}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              borderRadius: 2,
              mb: 0.5,
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>

            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}