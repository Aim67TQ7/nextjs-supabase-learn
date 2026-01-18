import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Next.js + Supabase Learning',
    description: 'Practical auth and multi-tenancy patterns',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
          <html lang="en">
                <body className="bg-slate-900 text-white min-h-screen">
                  {children}
                </body>body>
          </html>html>
        )
}</html>
