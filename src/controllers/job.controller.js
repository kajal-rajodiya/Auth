import Jobs from '../models/job.model.js'

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find({}).populate({path:"company",select:"name"}).populate('skills').populate('category');
        return res.status(200).send(jobs);
    }
    catch (error) {
        return res.status(500).send({
            message: "Error is getting all jobs",
            error: error.message
        })
    }
}
const getJobs = async (req, res) => {
    const { id } = req.params;
    try {
        const jobs= await Jobs.findById(id);
        return res.status(200).send(jobs);
    } catch (error) {
        return res.status(500).send({ message: "Error is getting jobs", error: error.message });
    }
}
const createJobs = async (req, res) => {
    try {
        const jobs = await Jobs.create(req.body);
        return res.status(201).send({ message: "jobs created successfully", jobs});
    } catch (error) {
        return res.status(500).send({ message: "Error is getting jobs", error: error.message });
    }
}
const updateJobs = async (req, res) => {
    const { id } = req.params;
    try {
        const jobs = await Jobs.findByIdAndUpdate(id, req.body, {
            new: true
        })
        return res.status(200).send({ message: "jobs updated successfully", jobs });
    } catch (error) {
        return res.status(500).send({ message: "Error is getting jobs" });
    }
}
const deleteJobs = async (req, res) => {
    const { id } = req.params;
    try {
        const jobs = await Jobs.findByIdAndDelete(id)
        return res.status(200).send({ message: "jobs deleted successfully",jobs });
    } catch (error) {
        return res.status(500).send({ message: "Error is getting jobs" });
    }
}

export {
    getAllJobs, getJobs, createJobs, updateJobs, deleteJobs
}