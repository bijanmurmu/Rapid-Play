import type React from "react"
import Header from "./header"
import Footer from "./footer"

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export default function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className={`min-h-screen w-full bg-gradient-to-b from-zinc-900 to-black via-zinc-900/90 ${className}`}>
      <Header />
      <main className="pt-24 pb-12 px-4 sm:px-6 relative z-10 min-h-[calc(100vh-6rem)]">{children}</main>
      <Footer />
    </div>
  )
}
