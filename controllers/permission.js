import {
  createPermission,
  deletePermission,
  getPermission,
  getPermissionById,
  updatePermission,
} from "../services/permission.js";

export const createPermissionHandler = async (req, res) => {
  try {
    const permission = await createPermission(req.body);
    return res.status(201).json({
      message: "Permission created successfully",
      permission,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error creating permission",
      error: error.message,
    });
  }
};

export const getPermissionsHandler = async (req, res) => {
  try {
    const permissions = await getPermission();
    return res.status(200).json(permissions);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPermissionByIdHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const permission = await getPermissionById(id);
    return res.status(200).json(permission);
  } catch (error) {
    return res.status(500).json({ message: "Permission not found" });
  }
};

export const updatePermissionHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const permission = await updatePermission(id, req.body);
    if (permission) {
      return res
        .status(200)
        .json({ message: "Permission updated successfully", permission });
    } else {
      return res.status(404).json({ message: "Permission not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Permission not found" });
  }
};

export const deletePermissionHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const permission = await deletePermission(id);
    if (permission) {
      return res
        .status(200)
        .json({ message: "Permission deleted successfully" });
    } else {
      return res.status(404).json({ message: "Permission not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
