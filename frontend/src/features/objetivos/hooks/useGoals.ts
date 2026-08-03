import { useQuery } from "@tanstack/react-query";

import { GoalService } from "../services/GoalService";

export function useGoals() {
  const query = useQuery({
    queryKey: ["goals"],
    queryFn: GoalService.getAll,
  });

  return {
    goals: query.data ?? [],
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
