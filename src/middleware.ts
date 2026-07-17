import { defineMiddleware } from 'astro:middleware'

const VALID_ROUTES = [
  '/',
  '/login',
  '/usuarios',
  '/estadisticas',
  '/publicaciones/nueva',
  '/publicaciones/ordenar',
  '/tutorial',
]
// const PUBLIC_ROUTES = ['/login']
const PUBLIC_ROUTES = VALID_ROUTES
export const onRequest = defineMiddleware(({ url, cookies, redirect }, next) => {
  const isPublic = PUBLIC_ROUTES.includes(url.pathname)

  if (isPublic) return next()
  if (!VALID_ROUTES.includes(url.pathname)) {
    return redirect('/')
  }

  const session = cookies.get('session')?.value

  if (!session) {
    return redirect('/login')
  }
})
