# Next.js + Supabase Boilerplate

Um boilerplate moderno e tipado para projetos Next.js com autenticação via Supabase e interface moderna usando shadcn/ui.

## 🚀 Tecnologias

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## 📁 Estrutura do Projeto

```
├── app/                  # Rotas e páginas Next.js
│   ├── (auth)/          # Grupo de rotas de autenticação
│   └── (protected)/     # Grupo de rotas protegidas
├── components/          # Componentes React reutilizáveis
│   └── ui/             # Componentes de UI (shadcn/ui)
├── contexts/           # Contextos React (AuthContext)
├── hooks/             # Custom React hooks
├── lib/              # Utilitários e configurações
├── services/         # Integrações com serviços
│   └── supabase/    # Cliente Supabase
└── types/           # Definições de tipos TypeScript
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
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon_do_supabase
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 📝 Features

- ✅ Autenticação com Email/Senha
- ✅ Autenticação com Google
- ✅ Proteção de rotas
- ✅ Layout responsivo
- ✅ Tema escuro
- ✅ UI moderna com shadcn/ui
- ✅ Totalmente tipado
- ✅ Integração Supabase

## 🔒 Páginas Protegidas

- `/dashboard` - Painel principal
- `/documentos` - Gerenciamento de documentos
- `/pedidos` - Gerenciamento de pedidos
- `/aplicacoes` - Gerenciamento de aplicações
- `/compartilhar` - Compartilhamento de recursos

## 📚 Documentação

- [Next.js](https://nextjs.org/docs)
- [Supabase](https://supabase.com/docs)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
