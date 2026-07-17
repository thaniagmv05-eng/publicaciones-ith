// src/services/post.service.ts
import db from '@/db/prisma'

type CreatePostDto = {
  Titulo: string
  Contenido: string
  FechaCreacion?: Date
  Estado: number
  Orden?: string
  IdUsuario: number
}

export class PostService {
  static async getAll() {
    return await db.publicacion.findMany({
      include: {
        usuario: true,
        imagenes: true,
      },
    })
  }

  static async createPublicacion(newPost: CreatePostDto) {
    const { Titulo, Contenido, FechaCreacion, Estado, Orden, IdUsuario } = newPost

    return await db.publicacion.create({
      data: {
        Titulo,
        Contenido,
        Fecha_Creacion: FechaCreacion ?? new Date(),
        Estado,
        Orden,

        usuario: {
          connect: {
            Id_Usuario: IdUsuario,
          },
        },
      },
    })
  }
}
