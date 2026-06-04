import type React from "react"
import Header from "./header"
import Footer from "./footer"

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export default function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className={`min-h-screen w-full bg-[#050505] text-white ${className}`}>
      <Header />
      <main className="pt-24 pb-12 relative z-10 min-h-[calc(100vh-6rem)]">{children}</main>
      <Footer />
    </div>
  )
}
