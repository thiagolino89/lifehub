import { getGoals } from "../api/goalsApi";

export class GoalService {
  static async getAll() {
    return getGoals();
  }
}