# Next.js + Supabase + Auth.js Boilerplate

Um boilerplate moderno e tipado para projetos Next.js com autenticação e banco de dados.

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Supabase](https://supabase.com/)
- [Auth.js](https://authjs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## 📁 Estrutura do Projeto

```
├── app/                  # Rotas e páginas Next.js
├── components/           # Componentes React reutilizáveis
│   ├── ui/              # Componentes de UI (shadcn/ui)
│   └── forms/           # Componentes de formulário
├── hooks/               # Custom React hooks
├── lib/                 # Bibliotecas compartilhadas
├── services/            # Integrações com serviços externos
│   ├── supabase/        # Cliente Supabase (SSR)
│   └── auth/            # Configuração Auth.js
├── styles/              # Arquivos de estilo
├── types/               # Definições de tipos TypeScript
└── utils/               # Funções utilitárias
```

## 🚦 Começando

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Preencha as variáveis em `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 📝 Features

- ✅ Autenticação com Google
- ✅ Supabase SSR
- ✅ Tema escuro
- ✅ UI Components modernos
- ✅ Totalmente tipado
- ✅ Layout responsivo

## 📚 Documentação

- [Next.js](https://nextjs.org/docs)
- [Supabase](https://supabase.com/docs)
- [Auth.js](https://authjs.dev/reference/nextjs)
- [shadcn/ui](https://ui.shadcn.com/docs)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
