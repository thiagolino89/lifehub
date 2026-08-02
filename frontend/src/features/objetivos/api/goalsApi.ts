import type { Goal } from "../types/Goal";

const mockGoals: Goal[] = [
  {
    id: "1",
    title: "Treinar",
    frequency: "DAILY",
    completed: true,
    order: 1,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Estudar React",
    frequency: "DAILY",
    completed: false,
    order: 2,
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "Ler um livro",
    frequency: "WEEKLY",
    completed: false,
    order: 3,
    createdAt: new Date(),
  },
];

export async function getGoals(): Promise<Goal[]> {
  return Promise.resolve(mockGoals);
}