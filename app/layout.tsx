import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Pokédex",
  description: "Pokédex web app built with Next.js and Tailwind CSS.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="flex min-h-screen flex-col items-center p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
              <Link href="/"><h2 className="text-2xl text-bold">Pokédex</h2></Link>
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
