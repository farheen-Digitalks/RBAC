import express from "express";
import {
  createPermissionHandler,
  deletePermissionHandler,
  getPermissionByIdHandler,
  getPermissionsHandler,
  updatePermissionHandler,
} from "../controllers/permission.js";
const router = express.Router();

router.post("/", paginationMiddleware(permission), createPermissionHandler);
router.get("/", getPermissionsHandler);
router.get("/:id", getPermissionByIdHandler);
router.put("/:id", updatePermissionHandler);
router.delete("/:id", deletePermissionHandler);

export default router;