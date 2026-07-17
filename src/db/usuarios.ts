import { Rol } from '@prisma/client'
import { Hash } from '@/lib/utils'
import db from '@/db/prisma'

type CreateUserDto = {
  nombre: string
  rol: Rol
  correo: string
  password: string
}

export class UserService {
  static async getAll() {
    return await db.usuario.findMany()
  }

  static async getByCorreo(correo: string) {
    const usuario = await db.usuario.findFirst({
      where: {
        Correo: correo,
      },
    })

    return usuario
  }
  static async logIn(correo: string, password: string) {
    const usuario = await this.getByCorreo(correo)
    if (!usuario) throw Error('El usuario no existe')

    const userData = {
      Id_Usuario: usuario.Id_Usuario,
      Nombre_Usuario: usuario.Nombre_Usuario,
      Rol: usuario.Rol,
    }
    if (usuario.Contrasena_Hash === Hash(password)) {
      return userData
    }
    return null
  }

  static async createUsuario(newUsuario: CreateUserDto) {
    const { nombre, rol, correo, password } = newUsuario

    const hashedPassword = Hash(password)

    return await db.usuario.create({
      data: {
        Nombre_Usuario: nombre,
        Rol: rol,
        Correo: correo,
        Contrasena_Hash: hashedPassword,
      },
    })
  }
}
