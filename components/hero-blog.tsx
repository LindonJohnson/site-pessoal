import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "./scroll-reveal-blog"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h1 className="text-5xl lg:text-7xl font-normal tracking-tight mb-6 text-balance">
              Domine IA.
              <br />
              Pense Melhor.
              <br />
              Aprenda Rápido.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Junte-se a milhares de pessoas que estão aprendendo os fundamentos da IA para ganharem mais, trabalhando
                menos. De graça no seu e-mail todo sábado pela manhã.
              </p>

              <div className="flex gap-2">
                <Input type="email" placeholder="Seu melhor e-mail" className="flex-1 transition-all duration-300 focus:scale-[1.02]" />
                <Button className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 cursor-pointer">
                <Link href="/not-found">Inscrever-se</Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">Sem Spam • 2 min</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
