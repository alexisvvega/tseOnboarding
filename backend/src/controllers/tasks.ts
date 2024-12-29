import { RequestHandler } from "express";
import TaskModel from "src/models/task";

export const getAllTasks: RequestHandler = async (req, res, next) => {
  try {
    // Fetch and sort tasks by the creation date in ascending order
    const tasks = await TaskModel.find().sort({ dateCreated: "asc" }).populate("assignee");
    // Respond with the sorted list of tasks
    res.status(200).json(tasks);
  } catch (error) {
    // Pass any errors to the error-handling middleware
    next(error);
  }
};
