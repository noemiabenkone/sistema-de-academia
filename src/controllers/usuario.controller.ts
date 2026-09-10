    import {Request, Response} from 'express'  
    import { listarUsuarios as listarUsuariosService } from '../services/usuario.service.js'
    import { buscarUsuario as buscarUsuarioPor } from '../services/usuario.service.js' 
    import { atualizarUsuario as atualizarUsuarioService } from '../services/usuario.service.js'
    import {criarUsuario as criarUsuarioService} from '../services/usuario.service.js'
    import {desativarUsuario as desativarUsuarioService} from '../services/usuario.service.js'

export async function listarUsuarios(req: Request, res: Response) {
   try{
    const usuarios = await listarUsuariosService()
    res.status(200).json({
        message: `Lista de usuários`,
        data: usuarios
    })
   } catch (error) {
        res.status(500).json({
            message: `Erro ao listar usuários`
        })
   }
}

export async function buscarUsuario(req: Request, res: Response) {
    try {
        const usuario = await buscarUsuarioPor(Number(req.params.id));
        res.status(200).json({
            message: `Usuário ${req.params.id} encontrado`,
            data: usuario
        });
    } catch (error) {
        res.status(500).json({
            message: `Erro ao buscar usuário`
        });
    }
}

export async function atualizarUsuario(req: Request, res: Response) {
    
       const usuario = await atualizarUsuarioService(Number(req.params.id),
          req.body
       );
        res.status(200).json({
            message: `Usuário ${req.params.id} atualizado com sucesso`,
            data: usuario
        });
    
    
}

export async function desativarUsuario(req: Request, res: Response) {
   try{
    const usuario = await desativarUsuarioService(Number(req.params.id))
      res.json({
         message: `Usuário desativado com sucesso`,
         usuario
      })
    } catch (erro) {
        res.status(500).json({
          message:'erro ao desativar o usuario',
          erro
        })
    }
   }

export async function criarUsuario(req: Request, res: Response) {
   try{
    const usuario = await criarUsuarioService(req.body);
     
    res.status(200).json({
        message: 'usuario criado com sucesso',
        usuario
    });
    }  catch (error) {
    res.status(500).json({
      message: "Erro ao criar plano",
      error
    });
  }
    
}