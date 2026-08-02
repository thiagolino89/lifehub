import { useEffect, useState } from "react";

import type { Goal } from "../types/Goal";
import { GoalService } from "../services/GoalService";

export function useGoals() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGoals() {
      try {
        const data = await GoalService.getAll();
        setGoals(data);
      } finally {
        setLoading(false);
      }
    }

    loadGoals();
  }, []);

  return {
    goals,
    loading,
  };
}