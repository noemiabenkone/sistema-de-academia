    import {Request, Response} from 'express'  
    import { 
      listarUsuarios as listarUsuariosService,
      buscarUsuario as buscarUsuarioPor, 
       atualizarUsuario as atualizarUsuarioService,
       criarUsuario as criarUsuarioService,
       desativarUsuario as desativarUsuarioService
    } from '../services/usuario.service.js'
import { usuarioSchema } from '../schemas/usuario.schema.js';

export async function listarUsuarios(req: Request, res: Response) {
  const usuarios = await listarUsuariosService()
  res.status(200).json({
    message: `Lista de usuários`,
    data: usuarios
  })
   
}

export async function buscarUsuario(req: Request, res: Response) {
   const usuario = await buscarUsuarioPor(Number(req.params.id));
   res.status(200).json({
      message: `Usuário ${req.params.id} encontrado`,
      data: usuario
    });
}

export async function atualizarUsuario(req: Request, res: Response) {
  const dadosValidados = usuarioSchema.parse(req.body)
  const usuario = await atualizarUsuarioService(Number(req.params.id),dadosValidados);
  res.status(200).json({
    message: `Usuário ${req.params.id} atualizado com sucesso`,
    data: usuario
  });
    
    
}

export async function desativarUsuario(req: Request, res: Response) {
  const usuario = await desativarUsuarioService(Number(req.params.id))
  res.json({
    message: `Usuário desativado com sucesso`,
    usuario
  })
}

export async function criarUsuario(req: Request, res: Response) {
  const dadosValidados = usuarioSchema.parse(req.body)
  const usuario = await criarUsuarioService(dadosValidados);
  res.status(200).json({
    message: 'usuario criado com sucesso',
    usuario
  });
    
}