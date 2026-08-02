import {
  Card,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";

interface ProgressCardProps {
  title: string;
  progress: number;
}

export default function ProgressCard({
  title,
  progress,
}: ProgressCardProps) {
  return (
    <Card elevation={2}>
      <CardContent>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          gutterBottom
        >
          {title}
        </Typography>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            mb: 1,
          }}
        />

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {progress}% concluído
        </Typography>
      </CardContent>
    </Card>
  );
}