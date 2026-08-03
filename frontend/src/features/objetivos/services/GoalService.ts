import { GoalRepository } from "../repositories/GoalRepository";

export class GoalService {
  static async getAll() {
    return GoalRepository.getAll();
  }
}