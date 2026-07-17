export type Rol = 'Administrador' | 'Editor'

export interface Usuario {
  id: number
  nombreUsuario: string
  correo: string
  rol: Rol
}
