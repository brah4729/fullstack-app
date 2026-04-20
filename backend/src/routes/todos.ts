import { Router, Request, Response } from "express";
import prisma from "../db";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
  });
  res.json(todos);
});

router.post("/", async (req: Request, res: Response) => {
  const { title } = req.body;
  const todo = await prisma.todo.create({
    data: { title },
  });
  res.json(todo);
});

export default router;