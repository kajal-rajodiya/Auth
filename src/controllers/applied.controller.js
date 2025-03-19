import Apply from '../models/applied.model.js';

const getAllApplies = async (req, res) => {
    try {
        const apply = await Apply.find()
         return res.status(200).send(apply);
    } catch (error) {
        return res.status(500).send({ message: "Error in getting applies", error: error.message });
    }
};

const getApplies = async (req, res) => {
    const { id } = req.params;
    try {
        const apply = await Apply.findById(id);
        return res.status(200).send(apply);
    } catch (error) {
        return res.status(500).send({ message: "Error in getting apply", error: error.message });
    }
};

const createApplies = async (req, res) => {
    try {
        const { userId, jobs } = req.body;

        if (!userId || !jobs) {
            return res.status(400).send({ message: "userId and jobs are required" });
        }

        const apply = await Apply.create({
            userId, // Use userId from req.body
            jobs
        });

        return res.status(201).send({ message: "Application created successfully", apply });
    } catch (error) {
        return res.status(500).send({ message: "Error in creating apply", error: error.message });
    }
};


const updateApplies = async (req, res) => {
    const { id } = req.params;
    const { userId, jobs } = req.body;

    try {
        if (!userId || !jobs) {
            return res.status(400).send({ message: "userId and jobs are required" });
        }

        const apply = await Apply.findByIdAndUpdate(
            id,
            {
                userId,
                jobs // This will replace the array, not merge
            },
            { new: true } // To return the updated document
        );

        if (!apply) {
            return res.status(404).send({ message: "Application not found" });
        }

        return res.status(200).send({ message: "Apply updated successfully", apply });
    } catch (error) {
        return res.status(500).send({ message: "Error in updating apply", error: error.message });
    }
};


const deleteApplies = async (req, res) => {
    const { id } = req.params;
    try {
        const apply = await Apply.findByIdAndDelete(id);
        return res.status(200).send({ message: "Apply deleted successfully", apply });
    } catch (error) {
        return res.status(500).send({ message: "Error in deleting apply", error: error.message });
    }
};

export {
    getAllApplies,
    getApplies,
    createApplies,
    updateApplies,
    deleteApplies
};
