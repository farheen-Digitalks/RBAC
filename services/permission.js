import permission from "../models/permission.js";

export const createPermission = async (data) => {
  return await permission.create(data);
};

export const getPermission = async () => {
  return await permission.find();
};

export const getPermissionById = async (id) => {
  return await permission.findById(id);
};

export const updatePermission = async (id, data) => {
  return await permission.findByIdAndUpdate(id, data, {
    new: true,
  });
};

export const deletePermission = async (id) => {
  return await permission.findByIdAndDelete(id);
};
