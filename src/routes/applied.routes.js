import express from 'express';
import { createApplies, deleteApplies, getAllApplies, getApplies, updateApplies } from '../controllers/applied.controller.js';


const appliedRouter = express.Router();

appliedRouter.get("/details",getAllApplies);
appliedRouter.get("/:id", getApplies);
appliedRouter.post("/", createApplies);
appliedRouter.patch("/:id", updateApplies);
appliedRouter.delete("/:id", deleteApplies);

export default appliedRouter;
 