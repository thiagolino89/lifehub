export type GoalFrequency =
  | "DAILY"
  | "WEEKLY"
  | "MONTHLY"
  | "YEARLY";

export interface Goal {
  id: string;

  title: string;

  description?: string;

  frequency: GoalFrequency;

  completed: boolean;

  order: number;

  createdAt: Date;

  completedAt?: Date;
}