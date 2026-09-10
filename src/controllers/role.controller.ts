import { Request, Response } from "express";
import { listarRoles as listarRoleService  } from "../services/role.service.js";
import { buscarRole as buscarRoleService } from "../services/role.service.js";
import { criarRole as criarRoleService } from "../services/role.service.js";
import { atualizarRole as atualizarRoleService } from "../services/role.service.js";
import { desativarRole as desativarRoleService } from "../services/role.service.js";

export async  function listarRoles(req: Request, res: Response) {
  try{
    const roles = await listarRoleService();
    res.json({
    message: "Lista de roles",
    data: roles
  });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao listar roles",
    });
  }
 
}

export async function buscarRole(req: Request, res: Response) {
  try {
    const role = await buscarRoleService(Number(req.params.id));
    res.json({
      message: `Role ${req.params.id} encontrada`,
      data: role
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar role",
    });
  }
}

export async function criarRole(req: Request, res: Response) {
  try {
    const role = await criarRoleService(req.body.nome);
    res.json({
      message: "Role criada com sucesso",
      data: role
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao criar role",
    });
  }
}

export async function atualizarRole(req: Request, res: Response) {
  try {
    const role = await atualizarRoleService(Number(req.params.id), req.body.nome);
    res.json({
      message: `Role ${req.params.id} atualizada com sucesso`,
      data: role
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao atualizar role",
    });
  }
}

export async function desativarRole(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const role = await desativarRoleService(id);
    res.json({
      message: `Role ${req.params.id} desativada com sucesso`,
      data: role
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao desativar role",
    });
  }
}