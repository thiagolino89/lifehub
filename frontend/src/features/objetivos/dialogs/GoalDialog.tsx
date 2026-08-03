import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import GoalForm from "../forms/GoalForm";

interface GoalDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function GoalDialog({ open, onClose }: GoalDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Nova Meta</DialogTitle>

      <DialogContent>
        <GoalForm />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>

        <Button variant="contained">Salvar</Button>
      </DialogActions>
    </Dialog>
  );
}
