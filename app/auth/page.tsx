'use client'

import { useSupabaseAuth } from "@/hooks/use-supabase-auth"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const router = useRouter()
  const { signInWithEmail, signUpWithEmail, signInWithOAuth } = useSupabaseAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setMessage(null)
    setIsLoading(true)

    try {
      const { data, error } = await signInWithEmail(email, password)
      if (error) {
        console.error('Erro de login:', error)
        setError('Credenciais inválidas. Tente novamente.')
        return
      }
      
      if (data?.session) {
        router.push('/dashboard')
      } else {
        setError('Erro ao iniciar sessão. Tente novamente.')
      }
    } catch (err) {
      console.error('Erro inesperado:', err)
      setError('Ocorreu um erro ao fazer login. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setMessage(null)
    setIsLoading(true)

    try {
      const { data, error } = await signUpWithEmail(email, password, name)
      if (error) {
        console.error('Erro de cadastro:', error)
        setError('Erro ao criar conta. Tente novamente.')
        return
      }
      
      if (data) {
        router.push('/dashboard')
      } else {
        setError('Erro ao criar conta. Tente novamente.')
      }
    } catch (err) {
      console.error('Erro inesperado:', err)
      setError('Ocorreu um erro ao criar sua conta. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      const { error } = await signInWithOAuth('google')
      if (error) {
        console.error('Erro Google:', error)
        setError('Erro ao fazer login com Google')
      }
    } catch (err) {
      console.error('Erro inesperado Google:', err)
      setError('Erro ao fazer login com Google')
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 opacity-30 blur-[100px]" />
      </div>

      <Card className="relative w-full max-w-md border-gray-800 bg-black/80 text-white backdrop-blur-sm">
        <CardHeader className="space-y-2">
          <h1 className="text-center text-3xl font-bold">Bem-vindo</h1>
          <p className="text-center text-sm text-gray-400">
            Faça login ou crie sua conta
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full bg-white text-black hover:bg-gray-100"
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continuar com Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-black px-2 text-gray-400">OU</span>
            </div>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-900">
              <TabsTrigger value="login" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-orange-500 data-[state=active]:text-black">
                Cadastro
              </TabsTrigger>
            </TabsList>

            {error && (
              <div className="mt-4 rounded-md bg-red-900/50 p-4 text-sm text-red-300">
                {error}
              </div>
            )}

            {message && (
              <div className="mt-4 rounded-md bg-green-900/50 p-4 text-sm text-green-300">
                {message}
              </div>
            )}

            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-gray-800 bg-black/60 text-white placeholder-gray-400 focus:border-orange-500"
                />
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-gray-800 bg-black/60 text-white placeholder-gray-400 focus:border-orange-500"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-500 text-black hover:bg-orange-400"
                >
                  {isLoading ? 'Entrando...' : 'Entrar'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border-gray-800 bg-black/60 text-white placeholder-gray-400 focus:border-orange-500"
                />
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-gray-800 bg-black/60 text-white placeholder-gray-400 focus:border-orange-500"
                />
                <Input
                  type="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-gray-800 bg-black/60 text-white placeholder-gray-400 focus:border-orange-500"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-500 text-black hover:bg-orange-400"
                >
                  {isLoading ? 'Criando conta...' : 'Criar conta'}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter>
          <p className="w-full text-center text-xs text-gray-400">
            Protegido por reCaptcha
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
