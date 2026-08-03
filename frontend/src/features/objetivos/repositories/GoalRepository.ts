import { getGoals } from "../api/goalsApi";

export class GoalRepository {
  static async getAll() {
    return getGoals();
  }
}
