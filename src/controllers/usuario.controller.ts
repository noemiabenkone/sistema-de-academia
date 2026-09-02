    import {Request, Response} from 'express'   

export function listarUsuarios(req: Request, res: Response) {
    res.json({
        message: 'Lista de usuários'
    })
}

export function buscarUsuario(req: Request, res: Response) {
    res.json({
        message: `Usuário ${req.params.id} encontrado`
    })
}

export function atualizarUsuario(req: Request, res: Response) {
    res.json({
        message: `Usuário ${req.params.id} atualizado com sucesso`
    })
}

export function desativarUsuario(req: Request, res: Response) {
    res.json({
        message: `Usuário ${req.params.id} desativado com sucesso`
    })
}

export function criarUsuario(req: Request, res: Response) {
    res.json({
        message: `Usuário criado com sucesso`
    })
}