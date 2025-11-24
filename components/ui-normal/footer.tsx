import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              <Image src="/professional-portrait-man.jpg" alt="Alan Nicolas" fill className="object-cover grayscale" />
            </div>

            <div className="space-y-4">
              <p className="text-sm leading-relaxed opacity-90">
                Eu sou Alan Nicolas, criador do podcast <span className="font-medium">Vida Levados</span> e do
                Newsletter <span className="font-medium">Mentes Levadas</span>.
              </p>

              <p className="text-sm leading-relaxed opacity-90">
                Sempre estive envolvido com empreendedorismo, tecnologias e marketing. Também amo a alcançar em tempo
                livre as melhores promoções de métodos de Marketing Digital e Copywriting que me ajudam a crescer.
              </p>

              <p className="text-sm leading-relaxed opacity-90">
                E com base em toda a minha gestão de conhecimento e experiência em tecnologia, decidi e criei o Segundo
                Cérebro conectado à IA, capaz de me gerar conteúdo singular com qualidade que nenhuma outra ferramenta
                consegue.
              </p>
            </div>

            <div className="flex gap-4">
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:opacity-70 transition-opacity">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-xs opacity-70">Continua Levado em Sobre Mim.</p>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <h2 className="text-6xl lg:text-8xl font-light tracking-tight">Alan Nicolas</h2>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20">
          <p className="text-xs opacity-70 text-center">Alan Nicolas © 2025</p>
        </div>
      </div>
    </footer>
  )
}
