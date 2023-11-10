import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
            <h2>Next Project</h2>
            <Link href='/'>Dashboard</Link>
            <br/>
            <Link href='/tickets'>Tickets</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
