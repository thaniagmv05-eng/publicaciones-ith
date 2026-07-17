import type { APIRoute } from 'astro'
import { UserService } from '@/db/usuarios'
import { Hash } from '@/lib/utils'

export const prerender = false

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const body = await request.text()

    console.log('BODY RECIBIDO:', body)

    if (!body) {
      return new Response(
        JSON.stringify({
          error: 'Body vacío',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    }

    const { correo, password } = JSON.parse(body)

    console.log('CORREO:', correo)

    const user = await UserService.getByCorreo(correo)

    console.log('USUARIO:', user)

    if (!user) {
      return new Response(
        JSON.stringify({
          error: 'Correo o contraseña incorrectos',
        }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    }

    const auth = user.Contrasena_Hash === Hash(password)

    if (!auth) {
      return new Response(
        JSON.stringify({
          error: 'Correo o contraseña incorrectos',
        }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    }

    cookies.set('session', String(user.Id_Usuario), {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: import.meta.env.PROD,
      maxAge: 60 * 60 * 24,
    })

    return new Response(
      JSON.stringify({
        ok: true,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error) {
    console.error('ERROR LOGIN:', error)

    return new Response(
      JSON.stringify({
        error: String(error),
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }
}
