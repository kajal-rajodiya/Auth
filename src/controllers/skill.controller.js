import Skill from "../models/skill.model.js";

const getAllSkills = async (req,res)=>{
    try {
        const skills = await Skill.find({});
        return res.status(200).send(skills);
    } catch (error) {
        return res.status(500).send({message:"Error is getting skills",error:error.message})
    }
}
const getSkills = async (req,res)=>{
    const {id} = req.params;
    try {
        const skills = await Skill.findById(id);
        return res.status(200).send(skills);
    } catch (error) {
        return res.status(500).send({message:"Error is getting skills",error:error.message});
    }
}
const createSkills = async(req,res)=>{
    try {
        const skills = await Skill.create(req.body);
        return res.status(201).send({message:"skills created successfully",skills});
    } catch (error) {
        return res.status(500).send({message:"Error is getting skills",error:error.message});
    }
}
const updateSkills = async(req,res)=>{
    const {id} = req.params;
    try {
        const skills = await Skill.findByIdAndUpdate(id,req.body,{
            new:true
        })
        return res.status(200).send({message:"skills updated successfully",skills});
    } catch (error) {
        return res.status(500).send({message:"Error is getting skills"});
    }
}
const deleteSkills = async(req,res)=>{
    const {id} = req.params;
    try {
        const skills = await Skill.findByIdAndDelete(id)
        return res.status(200).send({message:"skills deleted successfully",skills});
    } catch (error) {
        return res.status(500).send({message:"Error is getting skills"});
    }
}
export {
    getAllSkills,getSkills,createSkills,updateSkills,deleteSkills
}