import {
  Checkbox,
  ListItem,
  ListItemText,
} from "@mui/material";

import type { Goal } from "../types/Goal";

interface GoalItemProps {
  goal: Goal;
}

export default function GoalItem({
  goal,
}: GoalItemProps) {
  return (
    <ListItem divider>
      <Checkbox
        checked={goal.completed}
        disabled
      />

      <ListItemText
        primary={goal.title}
        secondary={goal.frequency}
      />
    </ListItem>
  );
}