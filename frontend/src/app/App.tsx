import Typography from "@mui/material/Typography";

import MainLayout from "../components/layout/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <Typography variant="h4">
        Dashboard
      </Typography>

      <Typography mt={2}>
        Bem-vindo ao LifeHub.
      </Typography>
    </MainLayout>
  );
}