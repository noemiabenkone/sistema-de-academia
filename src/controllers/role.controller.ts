import { Request, Response } from "express";
import { 
  listarRoles as listarRoleService,
  buscarRole as buscarRoleService,
  criarRole as criarRoleService,
  atualizarRole as atualizarRoleService,
  desativarRole as desativarRoleService
} from "../services/role.service.js";
import { roleSchema } from "../schemas/role.schema.js";

export async  function listarRoles(req: Request, res: Response) {
  const roles = await listarRoleService();
  res.json({
    message: "Lista de roles",
    data: roles
  });
 
}

export async function buscarRole(req: Request, res: Response) {
  const role = await buscarRoleService(Number(req.params.id));
  res.json({
    message: `Role ${req.params.id} encontrada`,
    data: role
  });
}

export async function criarRole(req: Request, res: Response) {
  const dadosValidados = roleSchema.parse(req.body)
  const role = await criarRoleService(dadosValidados);
  res.json({
    message: "Role criada com sucesso",
    data: role
  });
}

export async function atualizarRole(req: Request, res: Response) {
  const dadosValidados = roleSchema.parse(req.body)
  const role = await atualizarRoleService(Number(req.params.id), dadosValidados);
  res.json({
    message: `Role ${req.params.id} atualizada com sucesso`,
    data: role
  });
}

export async function desativarRole(req: Request, res: Response) {
  const id = Number(req.params.id);
  const role = await desativarRoleService(id);
  res.json({
    message: `Role ${req.params.id} desativada com sucesso`,
    data: role
  });
  
}