import { Request, Response } from "express";
import {
  registrarCheckIn as registrarCheckInService,
  listarCheckIns as listarCheckInsService, 
  buscarCheckIn as buscarCheckInService } 
from "../services/checkIn.service.js";
import { checkInSchema } from "../schemas/checkIn.schema.js";

export async function listarCheckIns(req: Request, res: Response) {
 
    const checkIns = await listarCheckInsService();
    res.status(200).json({
      message: "Lista de check-ins",
      data: checkIns
    });
}

export async function buscarCheckIn(req: Request, res: Response) {
 
    const checkIn = await buscarCheckInService(Number(req.params.id));
    res.status(200).json({
      message: `Check-in ${req.params.id} encontrado`,
      data: checkIn
    });
  
}

export async function registrarCheckIn(req: Request, res: Response) {
  const dadosValidados = checkInSchema.parse(req.body)
  const checkIn = await registrarCheckInService(dadosValidados);
  res.status(201).json({
    message: `Check-in do aluno ${dadosValidados.alunoId} realizado com sucesso`,
    data: checkIn
  });
}
 

