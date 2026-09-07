import { Request, Response } from "express";
import { registrarCheckIn as registrarCheckInService } from "../services/checkIn.service.js";
import { listarCheckIns as listarCheckInsService, buscarCheckIn as buscarCheckInService } from "../services/checkIn.service.js";

export async function listarCheckIns(req: Request, res: Response) {
  try {
    const checkIns = await listarCheckInsService();
    res.status(200).json({
      message: "Lista de check-ins",
      data: checkIns
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao listar check-ins'
    });
  }
}

export async function buscarCheckIn(req: Request, res: Response) {
  try {
    const checkIn = await buscarCheckInService(Number(req.params.id));
    res.status(200).json({
      message: `Check-in ${req.params.id} encontrado`,
      data: checkIn
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao buscar check-in'
    });
  }
}

export async function registrarCheckIn(req: Request, res: Response) {
  const checkInData = req.body;
  try {
    const checkIn = await registrarCheckInService(checkInData);
    res.status(201).json({
      message: `Check-in do aluno ${req.params.id} realizado com sucesso`,
      data: checkIn
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao realizar check-in'
    });
  }
}
 

