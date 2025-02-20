import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const protectedPaths = [
  '/dashboard',
  '/documentos',
  '/pedidos',
  '/aplicacoes',
  '/compartilhar'
]

const publicPaths = ['/auth']

export async function middleware(request: NextRequest) {
  // Criar resposta inicial
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // Criar cliente Supabase
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // Verificar sessão
  const { data: { session } } = await supabase.auth.getSession()

  // Verificar se é rota pública
  const isPublicPath = publicPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  // Verificar se é rota protegida
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  // Se não tem sessão e não é rota pública, redireciona para login
  if (!session && !isPublicPath) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  // Se tem sessão e está tentando acessar auth, redireciona para dashboard
  if (session && isPublicPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}