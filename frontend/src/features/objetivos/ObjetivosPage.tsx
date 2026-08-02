import {
  CircularProgress,
  List,
  Typography,
} from "@mui/material";

import PageHeader from "../../components/ui/PageHeader";

import GoalItem from "./components/GoalItem";
import { useGoals } from "./hooks/useGoals";

export default function ObjetivosPage() {
  const { goals, loading } = useGoals();

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <PageHeader
        title="Objetivos"
        subtitle="Gerencie suas metas."
      />

      <Typography
        variant="h6"
        gutterBottom
      >
        Todas as metas
      </Typography>

      <List>
        {goals.map((goal) => (
          <GoalItem
            key={goal.id}
            goal={goal}
          />
        ))}
      </List>
    </>
  );
}