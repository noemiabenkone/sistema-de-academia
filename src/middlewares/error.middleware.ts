import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: "Dados inválidos",
      errors: err.issues.map((issue) => ({
        campo: issue.path.join("."),
        mensagem: issue.message
      }))
    });
  }

  return res.status(500).json({
    message: "Erro interno do servidor"
  });
}