import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/utils/supabase/middlewear'

const protectedPaths = [
  '/dashboard',
  '/documentos',
  '/pedidos',
  '/aplicacoes',
  '/compartilhar'
]

export async function middleware(request: NextRequest) {
  // Primeiro atualiza a sessão
  const response = await updateSession(request)

  // Verifica se o caminho atual está na lista de rotas protegidas
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  // Se for uma rota protegida, verifica a sessão
  if (isProtectedPath) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // Pega o token da sessão dos cookies
    const sessionCookie = request.cookies.get('sb-access-token')?.value

    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/auth', request.url))
    }

    // Verifica se o token é válido
    try {
      const authResponse = await fetch(`${supabaseUrl}/auth/v1/user`, {
        headers: {
          Authorization: `Bearer ${sessionCookie}`,
          APIKey: supabaseKey!
        }
      })

      if (!authResponse.ok) {
        return NextResponse.redirect(new URL('/auth', request.url))
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/auth', request.url))
    }
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|auth).*)',
  ],
} 