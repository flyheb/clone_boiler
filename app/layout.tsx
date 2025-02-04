import { Providers } from "./providers"
import "./globals.css"

export const metadata = {
  title: "Boilerplate",
  description: "Boilerplate para projetos Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
