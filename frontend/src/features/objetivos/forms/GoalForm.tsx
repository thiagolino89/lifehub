import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

export default function GoalForm() {
  return (
    <Stack spacing={3} mt={1}>
      <TextField label="Título" fullWidth />

      <TextField label="Descrição" fullWidth multiline minRows={3} />

      <FormControl fullWidth>
        <InputLabel>Frequência</InputLabel>

        <Select label="Frequência" defaultValue="DAILY">
          <MenuItem value="DAILY">Diária</MenuItem>

          <MenuItem value="WEEKLY">Semanal</MenuItem>

          <MenuItem value="MONTHLY">Mensal</MenuItem>

          <MenuItem value="YEARLY">Anual</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}
