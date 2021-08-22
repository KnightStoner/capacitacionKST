

export class Estado{
    id: number;
    descripcion: string;
}


export class Perfil{
    id: number;
    nombre: string;
}

export class Usuario{
    id: number;
    idPersona: number;
    nombre: string;
    login: string;
    email: string;
    esAd: number;
    fechaUltimaSesion: string;
    estado: Estado;
    perfil: Perfil;
    clave: string;
}

export class Paginacion{
    totalregistros: number;
    totalpagina: number;
}


export class UsuarioListResponse{
    usuarios: Usuario[];
    paginacion: Paginacion;
}
