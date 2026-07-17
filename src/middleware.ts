import { defineMiddleware } from 'astro:middleware'

const PUBLIC_ROUTES = ['/login']

export const onRequest = defineMiddleware(({ url, cookies, redirect }, next) => {
  if (PUBLIC_ROUTES.includes(url.pathname)) {
    return next()
  }

  const session = cookies.get('session')?.value

  if (!session) {
    return redirect('/login')
  }

  return next()
})
