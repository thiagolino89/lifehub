import Grid from "@mui/material/Grid";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

import PageHeader from "../../components/ui/PageHeader";
import StatCard from "../../components/ui/StatCard";
import ProgressCard from "../../components/ui/ProgressCard";

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="Dashboard" subtitle="Bem-vindo ao LifeHub." />

      <Grid container spacing={3} mb={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard
            title="Objetivos"
            value={12}
            icon={<EmojiEventsIcon fontSize="large" />}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard
            title="Concluídos"
            value={8}
            icon={<CheckCircleIcon fontSize="large" />}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StatCard
            title="Pendentes"
            value={4}
            icon={<PendingActionsIcon fontSize="large" />}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ProgressCard title="Progresso Diário" progress={75} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ProgressCard title="Progresso Semanal" progress={60} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ProgressCard title="Progresso Mensal" progress={45} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ProgressCard title="Progresso Anual" progress={30} />
        </Grid>
      </Grid>
    </>
  );
}
