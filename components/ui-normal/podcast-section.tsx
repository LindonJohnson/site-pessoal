import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

export function PodcastSection() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative aspect-square max-w-md mx-auto transform transition-transform duration-700 hover:scale-105 hover:rotate-2">
              <Image src="/smartphone-mockup-podcast-app.jpg" alt="Podcast App" fill className="object-contain" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-balance">Podcast IA Levados</h2>

              <p className="text-sm text-muted-foreground leading-relaxed">
                O Podcast IA Levados traz casos práticos e reais. Conversas que conectam pessoas e startups com suas
                histórias e os caminhos que percorreram para chegar onde estão.
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Dessa forma, criamos valor consultando os que mais têm a dizer por quem está começando sua jornada.
              </p>

              <Button className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Ouvir agora
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
