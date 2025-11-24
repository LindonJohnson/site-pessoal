import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden  animate-pulse">
              <Image src="/image-pessoal.jpg" alt="#" fill className=" object-cover grayscale " />
            </div>

            <div className="space-y-4">
              <p className=" text-justify text-sm leading-relaxed opacity-90">
              
                Sou <span className="font-medium">Lindon Johnson</span> , apaixonado por tecnologia, programação e análise de dados, sempre buscando entender o mundo de forma profunda e criativa. Neste espaço, compartilho projetos, aprendizados e insights que refletem minha jornada de evolução constante — tanto profissional quanto pessoal. Aqui, você vai encontrar um olhar curioso sobre tecnologia, educação, comportamento humano e maneiras de construir soluções inteligentes, mantendo sempre postura, autenticidade e liberdade de pensamento.
              </p>

              {/* <p className="text-sm leading-relaxed opacity-90">
                Sempre estive envolvido com empreendedorismo, tecnologias e marketing. Também amo a alcançar em tempo
                livre as melhores promoções de métodos de Marketing Digital e Copywriting que me ajudam a crescer.
              </p>

              <p className="text-sm leading-relaxed opacity-90">
                E com base em toda a minha gestão de conhecimento e experiência em tecnologia, decidi e criei o Segundo
                Cérebro conectado à IA, capaz de me gerar conteúdo singular com qualidade que nenhuma outra ferramenta
                consegue.
              </p> */}
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

            <p className="text-xs opacity-70">Continuar em Sobre Mim.</p>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <h2 className="text-5xl lg:text-8xl font-normal tracking-tight">Lindon Johnson</h2>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20">
          <p className="text-xs opacity-70 text-center">© {new Date().getFullYear()} Lindon. Todos os direitos
                reservados.</p>
        </div>
      </div>
    </footer>
  )
}
