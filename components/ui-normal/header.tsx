import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-light tracking-tight">
            Alan Nicolas
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-light hover:text-foreground/60 transition-colors">
              INÍCIO
            </Link>
            <Link href="#sobre" className="text-sm font-light hover:text-foreground/60 transition-colors">
              SOBRE MIM
            </Link>
            <Link href="#newsletter" className="text-sm font-light hover:text-foreground/60 transition-colors">
              NEWSLETTER
            </Link>
            <Button variant="outline" size="sm" className="text-sm font-light bg-transparent">
              LOGIN/CADASTRAR-SE
            </Button>
          </nav>

          <Button variant="ghost" size="sm" className="md:hidden">
            Menx
          </Button>
        </div>
      </div>
    </header>
  )
}
