import express from "express";
const router = express.Router();

import userRoutes from "./user.js";
import permissionRoutes from "./permission.js";
import roleRoutes from "./role.js";
import trialRoutes from "./trial.js";

router.use("/users", userRoutes);
router.use("/permission", permissionRoutes);
router.use("/role", roleRoutes);

export default router;
