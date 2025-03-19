import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
// token ..null and header undefined... issue
const authentication = async (req, res, next) => {
    try {
        console.log("Authorization Header:", req.headers.authorization);

        const token =
            req.headers.authorization && req.headers.authorization.startsWith("Bearer")
                ? req.headers.authorization.split(" ")[1]
                : null;

                console.log("Token: ", token)

        if (!token) {
            return res.status(401).send({ message: "Unauthorized access" });
        }

        console.log("process.env.", process.env.JWT_SECRET_KEY)

        // ✅ Decode token and extract user ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        console.log(decoded)

        // ✅ Find user in the database and attach to req.user
        const user = await User.findById(decoded.userId);
        console.log(user)
        if (!user) {
            return res.status(401).send({ message: "User not found" });
        }

        req.user = user; // ✅ Attach user to request object
        next(); // Pass control to next middleware
    } catch (error) {
        return res.status(500).send({ message: "Error authorizing user", error: error.message });
    }
};

export { authentication };
