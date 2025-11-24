"use client";

import {
  Instagram,
  Linkedin,
  Mail,
  ArrowUpRight,
  ChevronUp,
  icons,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { esteregg } from "./esteregg";


export default function LinktreePage() {
  const links = [
    {
      icons: icons.User,
      title: "Portifólio",
      description: "Conheça minha história e trajetória",
      href: "/portifolio",
    },
    {
      icons: icons.BrainCircuit,
      title: "Blog",
      description: "Receba insights sobre IA e tecnologia",
      href: "/blog",
    },
    // {
    //   icons: icons.Podcast,
    //   title: "Podcast",
    //   description: "Domine IA. Pense Melhor. Aprenda Rápido.",
    //   href: "/app/not-found",
    // },
    {
      icons: icons.Github,
      title: "GitHub",
      description: "Veja meus projetos e contribuições",
      href: "https://github.com/LindonJohnson",
    },
    {
      icons: icons.BicepsFlexed,
      title: "Ficha de Treino",
      description: "Ficha de treino básico para iniciantes",
      href: "/about",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/lindonjhnson/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/lindon-johnson-dias-150754375/",
      label: "LinkedIn",
    },
    {
      icon: icons.Music2,
      href: "https://www.tiktok.com/@eljaybeats",
      label: "tiktok",
    },
    {
      icon: Mail,
      href: "mailto:lindonjhnson777@gmail.com",
      label: "Email",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8 md:py-12 lg:py-16">
        <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl">
          <section className="relative flex min-h-[50vh] md:min-h-[60vh] items-center justify-center overflow-hidden px-4 py-12 md:py-16">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

            <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-float rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-float-delayed rounded-full bg-primary/5 blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="mb-6 md:mb-8 flex justify-center animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />

                  <div className="relative h-28 w-28 md:h-36 md:w-36 lg:h-40 lg:w-40 overflow-hidden rounded-full border-4 border-background shadow-2xl ring-2 ring-primary/10">
                    <Image
                      src="/image-pessoal.jpg"
                      alt="Lindon Johnson"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="mb-3 md:mb-4 inline-block animate-fade-in rounded-full border border-border/50 bg-background/50 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-light text-muted-foreground backdrop-blur-sm">
                IA
              </div>

              <div className="mb-3 md:mb-4 inline-block animate-fade-in rounded-full border border-border/50 bg-background/50 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-light text-muted-foreground backdrop-blur-sm">
                Data Science
              </div>

              <div className="mb-3 md:mb-4 inline-block animate-fade-in rounded-full border border-border/50 bg-background/50 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-light text-muted-foreground backdrop-blur-sm">
                Programing
              </div>

              <div className="mb-3 md:mb-4 inline-block animate-fade-in rounded-full border border-border/50 bg-background/50 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-light text-muted-foreground backdrop-blur-sm">
                Data Analyst
              </div>

              <h1 className="mb-3 md:mb-4 animate-fade-in-up font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground [animation-delay:100ms]">
                Lindon Johnson
              </h1>
              <p className="mx-auto max-w-2xl animate-fade-in-up font-sans text-base md:text-lg lg:text-xl font-light text-muted-foreground px-4 [animation-delay:200ms]">
                Transformando negócios através da inteligência artificial
              </p>
            </div>
          </section>

          <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
            <div className="grid gap-3 md:gap-4 lg:gap-5">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-border/50 bg-background/50 p-5 md:p-6 lg:p-7 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-foreground/20 hover:bg-background/80 hover:shadow-xl hover:shadow-primary/5"
                  style={{
                    animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-3 md:gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        {link.icons && (
                          <link.icons className="h-5 w-5 text-muted-foreground" />
                        )}
                        <h3 className="mb-1.5 md:mb-2 font-sans text-xl md:text-2xl lg:text-2xl font-semibold tracking-tight text-foreground transition-colors">
                          {link.title}
                        </h3>
                      </div>
                      <p className="font-sans text-sm md:text-base font-light text-muted-foreground">
                        {link.description}
                      </p>
                    </div>

                    <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 md:mt-16 animate-fade-in [animation-delay:600ms]">
              <div className="mb-6 md:mb-8 text-center">
                <h2 className="mb-2 md:mb-3 font-sans text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  Vamos Conectar
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Siga-me nas redes sociais
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    asChild
                    className="group h-12 w-12 md:h-14 md:w-14 rounded-full border-border/50 bg-background/50 p-0 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-foreground/20 hover:bg-background/80 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 md:h-5 md:w-5 text-foreground transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </section>

          <footer className="border-t border-border/50 bg-background/30 px-4 py-6 md:py-8 backdrop-blur-sm">
            <div className="text-center">
              <p className="font-sans text-xs md:text-sm font-light text-muted-foreground">
                © {new Date().getFullYear()} Lindon. Todos os direitos
                reservados.
              </p>
            </div>
          </footer>
        </div>
      </div>

      {/* </CHANGE> End of card container wrapper */}
    </div>
  );
}


console.log(esteregg())


