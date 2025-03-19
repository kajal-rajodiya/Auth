import User from "../models/user.model.js";
import { createToken } from '../utilites/jwt.js'

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // ✅ Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        // ✅ Create a new user
        const user = await User.create({ name, email, password });
        
        return res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        return res.status(500).json({ message: "Error registering user", error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // ✅ Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({ message: "Invalid credentials" });
        }

        // ✅ Verify password
        const passwordMatch = await user.matchPassword(password);
        if (!passwordMatch) {
            return res.status(400).send({ message: "Invalid credentials" });
        }

        // ✅ Generate JWT token
        const token = createToken({ userId: user._id });

        // ✅ Set cookie options
        res.cookie("authToken", token, {
            path: "/",
            expires: new Date(Date.now() + 3600000), // 1 hour expiration
            secure: true,
            httpOnly: true,
            sameSite: "None",
        });

        return res.status(200).send({ message: "User logged in successfully", token });
    } catch (error) {
        return res.status(500).send({ message: "Error logging in user", error: error.message });
    }
};
const logout = async(req,res) =>{
    res.clearCookie('authToken');
    return res.status(200).send({message:"user logout successfully"});
}
const deleteUser = async (req,res) =>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
        return res.status(404).send({message:"user not found"})
        }
        return res.status(200).send({message:"User deleted successfully"})
    } catch (error) {
        return res.status(200).send({message:"Error is deleting the user",error:error.message})
    }
}

export { register, login, logout,deleteUser};
