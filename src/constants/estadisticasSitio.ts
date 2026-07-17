// Datos de prueba para el panel de "Estadísticas del sitio"
// Las propiedades de las interfaces van en español (modelo de datos)
// Los nombres de tipos/interfaces e identificadores de módulo van en inglés cuando aplica a lógica

export interface TarjetaResumen {
  id: string
  icono: 'documento' | 'lapiz' | 'persona' | 'imagen'
  valor: number
  etiqueta: string
  cambio: string
  colorIcono: 'azul' | 'verde' | 'naranja' | 'morado'
}

export interface PublicacionSemana {
  semana: string
  publicadas: number
  ocultas: number
}

export interface EstadoDistribucion {
  nombre: string
  valor: number
  porcentaje: number
  color: 'azul' | 'gris' | 'naranja'
}

export interface AutorTop {
  nombre: string
  iniciales: string
  publicaciones: number
}

export interface ActividadReciente {
  titulo: string
  hora: string
}

export const tarjetasResumen: TarjetaResumen[] = [
  { id: 'total', icono: 'documento', valor: 47, etiqueta: 'Publicaciones totales', cambio: '+18%', colorIcono: 'azul' },
  { id: 'mes', icono: 'lapiz', valor: 12, etiqueta: 'Publicadas este mes', cambio: '+22%', colorIcono: 'verde' },
  { id: 'usuarios', icono: 'persona', valor: 5, etiqueta: 'Usuarios activos', cambio: '+1', colorIcono: 'naranja' },
  { id: 'imagenes', icono: 'imagen', valor: 184, etiqueta: 'Imágenes cargadas', cambio: '+34%', colorIcono: 'morado' },
]

export const publicacionesPorSemana: PublicacionSemana[] = [
  { semana: 'Sem 1', publicadas: 15, ocultas: 3 },
  { semana: 'Sem 2', publicadas: 11, ocultas: 0 },
  { semana: 'Sem 3', publicadas: 10, ocultas: 6 },
  { semana: 'Sem 4', publicadas: 9, ocultas: 0 },
]

export const estadoActual: EstadoDistribucion[] = [
  { nombre: 'Visibles', valor: 8, porcentaje: 67, color: 'azul' },
  { nombre: 'Ocultas', valor: 3, porcentaje: 25, color: 'gris' },
  { nombre: 'Borradores', valor: 1, porcentaje: 8, color: 'naranja' },
]

export const autoresTop: AutorTop[] = [
  { nombre: 'Luis Beaven', iniciales: 'LB', publicaciones: 18 },
  { nombre: 'Marcos Ochoa', iniciales: 'MO', publicaciones: 13 },
  { nombre: 'Ana Torres', iniciales: 'AT', publicaciones: 9 },
]

export const actividadReciente: ActividadReciente[] = [
  { titulo: 'Nueva publicación creada', hora: 'Hoy 12:34' },
  { titulo: 'Imagen actualizada en publicación', hora: 'Hoy 09:10' },
  { titulo: 'Publicación marcada como oculta', hora: 'Ayer 18:22' },
]
