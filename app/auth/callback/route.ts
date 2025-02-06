import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // 1. Obtém a URL da requisição e o código de autenticação
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  // 2. Se existe um código de autenticação
  if (code) {
    // 3. Prepara o redirecionamento para o dashboard
    const response = NextResponse.redirect(new URL('/dashboard', requestUrl.origin))

    // 4. Cria cliente Supabase
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          // Obtém cookies da requisição
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          // Define novos cookies na resposta
          set(name: string, value: string, options: CookieOptions) {
            response.cookies.set({
              name,
              value,
              ...options,
            })
          },
          // Remove cookies (definindo valor vazio)
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

    // 5. Troca o código temporário por uma sessão permanente
    await supabase.auth.exchangeCodeForSession(code)

    // 6. Retorna resposta com redirecionamento para dashboard
    return response
  }

  // 7. Se não há código, redireciona para página de login
  return NextResponse.redirect(new URL('/auth', requestUrl.origin))
}