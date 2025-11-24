import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal-blog"
import Link from "next/link"
import { Icon, AudioLines } from "lucide-react"

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
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-balance">Melhores Podcasts</h2><h2>"na minha opnião"</h2>

              <p className="text-justify text-sm text-muted-foreground leading-relaxed">
                Aqui compartilho meus podcasts favoritos, aqueles que realmente valem o play. São episódios que me fazem pensar, rir, aprender e refletir sobre tecnologia, comportamento humano, cultura, finanças e muito mais. Se você também curte conteúdo de qualidade para ouvir enquanto estuda, trabalha ou relaxa, essa é a lista certa para se perder no mundo dos podcasts.
              </p>
{/* 
              <p className="text-sm text-muted-foreground leading-relaxed">
                Dessa forma, criamos valor consultando os que mais têm a dizer por quem está começando sua jornada.
              </p> */}

              <Button className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
               <AudioLines />
                <Link
                href="/not-found">Ouvir agora</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
