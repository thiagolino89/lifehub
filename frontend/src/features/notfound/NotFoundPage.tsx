import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        404
      </Typography>

      <Typography gutterBottom>
        Página não encontrada.
      </Typography>

      <Button
        component={Link}
        to="/dashboard"
        variant="contained"
      >
        Voltar ao Dashboard
      </Button>
    </>
  );
}