import express from "express";
import {
  createPermissionHandler,
  deletePermissionHandler,
  getPermissionByIdHandler,
  getPermissionsHandler,
  updatePermissionHandler,
} from "../controllers/permission.js";
import { paginationMiddleware } from "../middleware/pagination.js";
import Permission from "../models/permission.js";
const router = express.Router();

router.post("/", paginationMiddleware(Permission), createPermissionHandler);
router.get("/", getPermissionsHandler);
router.get("/:id", getPermissionByIdHandler);
router.put("/:id", updatePermissionHandler);
router.delete("/:id", deletePermissionHandler);

export default router;