import { Router } from "express";

export const tasksRoutes = Router();

tasksRoutes.post("/", (req, res) => {
    return res
        .status(200)
        .send({sucess: "sucess"});
})