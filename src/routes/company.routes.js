import express from 'express'
import { createCompany, deleteCompany, getAllCompaines,getCompany, updateCompany } from '../controllers/company.controller.js'

const companyRouter = express.Router();
companyRouter.get("/details",getAllCompaines);
companyRouter.get("/:id",getCompany);
companyRouter.post("/create",createCompany);
companyRouter.patch("/:id",updateCompany);
companyRouter.delete("/:id",deleteCompany);
export default companyRouter;