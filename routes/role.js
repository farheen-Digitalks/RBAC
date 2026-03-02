import express from "express";
import role from "../models/role.js";
import {
  createRoleHandler,
  deleteRoleHandler,
  getRoleByIdHandler,
  getRolesHandler,
  updateRoleHandler,
} from "../controllers/role.js";
const router = express.Router();

router.get(
  "/",
  paginationMiddleware(role, { populate: "permissions" }),
  getRolesHandler,
);
router.post("/", createRoleHandler);
router.get("/:id", getRoleByIdHandler);
router.put("/:id", updateRoleHandler);
router.delete("/:id", deleteRoleHandler);

export default router;
