import express from "express";
const router = express.Router();

router.get("/", getUsersHandler);
router.post("/create-user", createUserHandler);
router.get("/:id", getUserByIdHandler);
router.put("/:id", updateUserHandler);
router.delete("/:id", deleteUserHandler);
router.post("/login", loginUserHandler);

export default router;
