import express from 'express';
import { createSkills, deleteSkills, getAllSkills, getSkills, updateSkills } from '../controllers/skill.controller.js';

const skillRouter = express.Router();

// ✅ Static routes first
skillRouter.post("/create", createSkills);
skillRouter.get("/details", getAllSkills);

// ✅ Dynamic routes last
skillRouter.get("/:id", getSkills);
skillRouter.patch("/:id", updateSkills);
skillRouter.delete("/:id", deleteSkills);

export default skillRouter;
