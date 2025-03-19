import Company from '../models/company.model.js'

const getAllCompaines = async (req,res)=>{
    try {
        const compaines = await Company.find({});
        return res.status(200).send(compaines);
    } catch (error) {
        return res.status(500).send({message:"Error is getting compaines",error:error.message})
    }
}
const getCompany = async (req,res)=>{
    const {id} = req.params;
    try {
        const company = await Company.findById(id);
        return res.status(200).send(company);
    } catch (error) {
        return res.status(500).send({message:"Error is getting compaines",error:error.message});
    }
}
const createCompany = async(req,res)=>{
    try {
        const company = await Company.create(req.body);
        return res.status(201).send({message:"Company created successfully",company});
    } catch (error) {
        return res.status(500).send({message:"Error is getting compaines",error:error.message});
    }
}
const updateCompany = async(req,res)=>{
    const {id} = req.params;
    try {
        const company = await Company.findByIdAndUpdate(id,req.body,{
            new:true
        })
        return res.status(200).send({message:"Company updated successfully",company});
    } catch (error) {
        return res.status(500).send({message:"Error is getting compaines"});
    }
}
const deleteCompany = async(req,res)=>{
    const {id} = req.params;
    try {
        const company = await Company.findByIdAndDelete(id)
        return res.status(200).send({message:"Company deleted successfully",company});
    } catch (error) {
        return res.status(500).send({message:"Error is getting compaines"});
    }
}
export {
    getAllCompaines,getCompany,createCompany,updateCompany,deleteCompany
}