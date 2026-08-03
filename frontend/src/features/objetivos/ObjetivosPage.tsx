import { useState } from "react";

import { Box, Button, CircularProgress, List, Typography } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import PageHeader from "@/components/ui/PageHeader";

import GoalItem from "./components/GoalItem";
import GoalDialog from "./dialogs/GoalDialog";
import { useGoals } from "./hooks/useGoals";

export default function ObjetivosPage() {
  const { goals, loading } = useGoals();

  const [dialogOpen, setDialogOpen] = useState(false);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <PageHeader title="Objetivos" subtitle="Gerencie suas metas." />

      <Box display="flex" justifyContent="flex-end" mb={3}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setDialogOpen(true)}
        >
          Nova Meta
        </Button>
      </Box>

      <Typography variant="h6" gutterBottom>
        Todas as metas
      </Typography>

      <List>
        {goals.map((goal) => (
          <GoalItem key={goal.id} goal={goal} />
        ))}
      </List>

      <GoalDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </>
  );
}
