import express from 'express';

import { createJobs, deleteJobs, getAllJobs, getJobs, updateJobs } from '../controllers/job.controller.js';
import { authentication } from '../middlewares/middleware.js';

const jobRouter = express.Router();
jobRouter.get('/details', getAllJobs);
jobRouter.get("/:id", getJobs);
jobRouter.post("/create", createJobs);
jobRouter.patch("/:id", updateJobs);
jobRouter.delete("/:id", deleteJobs);

export default jobRouter;