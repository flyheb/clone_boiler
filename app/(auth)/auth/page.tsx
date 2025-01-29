'use client'

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { createClient } from '@/lib/supabase/client'

export default function Auth() {
    const handleLoginWithOAuth = async () => {
        // try {
        //     const supabase = createClient()
        //     const { data, error } = await supabase.auth.signInWithOAuth({
        //         provider: 'google',
        //         options: {
        //             redirectTo: `${window.location.origin}/auth/callback`
        //         }
        //     })

        //     if (error) {
        //         throw error
        //     }

        // } catch (error) {
        //     console.error('Erro ao fazer login com Google:', error)
        // }
        console.log('Login with Google clicked')
    }

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-zinc-900 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl" />
            <Card className="w-[380px] bg-black border-zinc-800 relative">
                <CardHeader className="text-center">
                    <h1 className="text-2xl font-bold text-white">Bem-vindo</h1>
                    <p className="text-sm text-zinc-400">Faça login ou crie sua conta</p>
                </CardHeader>
                <CardContent>
                    <div className="mb-4">
                        <Button 
                            variant="outline" 
                            className="w-full flex items-center gap-2 text-zinc-400 hover:text-white"
                            onClick={handleLoginWithOAuth}
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continuar com Google
                        </Button>
                    </div>
                    
                    <div className="relative mb-4">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-zinc-800"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-black px-2 text-zinc-400">ou</span>
                        </div>
                    </div>

                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login">Login</TabsTrigger>
                            <TabsTrigger value="register">Cadastro</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="seu@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Senha</Label>
                                    <Input id="password" type="password" />
                                </div>
                                <Button className="w-full">Entrar</Button>
                            </div>
                        </TabsContent>
                        <TabsContent value="register">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nome</Label>
                                    <Input id="name" type="text" placeholder="Seu nome" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="seu@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Senha</Label>
                                    <Input id="password" type="password" />
                                </div>
                                <Button className="w-full">Cadastrar</Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <p className="text-sm text-zinc-400">
                        Protegido por reCaptcha
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
