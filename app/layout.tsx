import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Exo_2 as Exo2, Audiowide, Rajdhani } from "next/font/google"
import "./globals.css"

/* Self-host the gaming fonts */
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
})

const exo2 = Exo2({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-exo",
})

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide",
})

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-rajdhani",
})

export const metadata: Metadata = {
  title: "Abi Kumar – Gaming Space Portfolio",
  description: "Personal gaming space-themed portfolio of Abi Kumar",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /* Expose both font variables on the <html> tag */
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable} ${audiowide.variable} ${rajdhani.variable}`}>
      <body>{children}</body>
    </html>
  )
}
