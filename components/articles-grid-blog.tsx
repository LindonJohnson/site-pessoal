import { ArticleCard } from "./article-card-blog"
import { ScrollReveal } from "./scroll-reveal-blog"
import Link from "next/link";



const articles = [
  {
    slug: "regra-de-3-ou-1-2",
    title: "A Regra de 3 (ou 1/2)",
    description:
      "A heurística simples dos grandes CEOs e líderes empresariais, mas que aparentemente, todo mundo parece não ter ouvido falar dela. Você conhece?",
    image: "/abstract-circular-pattern-black-white.jpg",

  },
  {
    slug: "ilusao-das-metas",
    title: "A Ilusão das Metas",
    description:
      "O modelo que usamos para definir metas parece. Ilustrando de novo modo, controlar suas emoções e ter um caminho mais claro para alcançar o que você quer.",
    image: "/geometric-architecture-black-white.jpg",
  },
  // {
  //   title: "Liberdade: o objetivo de adolescentes",
  //   description:
  //     "Muitas pessoas querem liberdade - mas, ao invés de ter alcançado a liberdade, elas se tornaram escravas da própria liberdade. Isso pode estar acontecendo com você.",
  //   image: "/minimalist-door-black-white.jpg",
  // },
  // {
  //   title: "Pregões Inteligentes vs Burra",
  //   description:
  //     "Você já se perguntou por que algumas pessoas parecem ter mais sorte que outras? Talvez não seja sorte, mas sim inteligência aplicada de forma estratégica.",
  //   image: "/abstract-brain-pattern-black-white.jpg",
  // },
  // {
  //   title: "Founders Mode: A revolução silenciosa da IA de verdade?",
  //   description:
  //     "Controlar suas emoções é fácil quando você sabe o caminho certo a seguir. Hoje vamos falar sobre um método revolucionário que está mudando vidas.",
  //   image: "/abstract-waves-black-white.jpg",
  // },
  // {
  //   title: "24 - O Nascimento",
  //   description:
  //     "Uma análise profunda sobre como as melhores ideias nascem e se desenvolvem. Descubra os padrões que grandes pensadores usam para criar inovação.",
  //   image: "/abstract-tree-growth-black-white.jpg",
  // },

  // {
  //   slug: "regra-de-3-ou-1-2",
  //   title: "A Regra de 3 (ou 1/2)",
  //   description:
  //     "A heurística simples dos grandes CEOs e líderes empresariais, mas que aparentemente, todo mundo parece não ter ouvido falar dela. Você conhece?",
  //   image: "/abstract-circular-pattern-black-white.jpg",

  // },
  // {
  //   slug: "ilusao-das-metas",
  //   title: "A Ilusão das Metas",
  //   description:
  //     "O modelo que usamos para definir metas parece. Ilustrando de novo modo, controlar suas emoções e ter um caminho mais claro para alcançar o que você quer.",
  //   image: "/geometric-architecture-black-white.jpg",
  // },
  // {
  //   title: "Liberdade: o objetivo de adolescentes",
  //   description:
  //     "Muitas pessoas querem liberdade - mas, ao invés de ter alcançado a liberdade, elas se tornaram escravas da própria liberdade. Isso pode estar acontecendo com você.",
  //   image: "/minimalist-door-black-white.jpg",
  // },
  // {
  //   title: "Pregões Inteligentes vs Burra",
  //   description:
  //     "Você já se perguntou por que algumas pessoas parecem ter mais sorte que outras? Talvez não seja sorte, mas sim inteligência aplicada de forma estratégica.",
  //   image: "/abstract-brain-pattern-black-white.jpg",
  // },
  // {
  //   title: "Founders Mode: A revolução silenciosa da IA de verdade?",
  //   description:
  //     "Controlar suas emoções é fácil quando você sabe o caminho certo a seguir. Hoje vamos falar sobre um método revolucionário que está mudando vidas.",
  //   image: "/abstract-waves-black-white.jpg",
  // },
  // {
  //   title: "24 - O Nascimento",
  //   description:
  //     "Uma análise profunda sobre como as melhores ideias nascem e se desenvolvem. Descubra os padrões que grandes pensadores usam para criar inovação.",
  //   image: "/abstract-tree-growth-black-white.jpg",
  // },
  // {
  //   slug: "regra-de-3-ou-1-2",
  //   title: "A Regra de 3 (ou 1/2)",
  //   description:
  //     "A heurística simples dos grandes CEOs e líderes empresariais, mas que aparentemente, todo mundo parece não ter ouvido falar dela. Você conhece?",
  //   image: "/abstract-circular-pattern-black-white.jpg",

  // },
  // {
  //   slug: "ilusao-das-metas",
  //   title: "A Ilusão das Metas",
  //   description:
  //     "O modelo que usamos para definir metas parece. Ilustrando de novo modo, controlar suas emoções e ter um caminho mais claro para alcançar o que você quer.",
  //   image: "/geometric-architecture-black-white.jpg",
  // },
  // {
  //   title: "Liberdade: o objetivo de adolescentes",
  //   description:
  //     "Muitas pessoas querem liberdade - mas, ao invés de ter alcançado a liberdade, elas se tornaram escravas da própria liberdade. Isso pode estar acontecendo com você.",
  //   image: "/minimalist-door-black-white.jpg",
  // },
  // {
  //   title: "Pregões Inteligentes vs Burra",
  //   description:
  //     "Você já se perguntou por que algumas pessoas parecem ter mais sorte que outras? Talvez não seja sorte, mas sim inteligência aplicada de forma estratégica.",
  //   image: "/abstract-brain-pattern-black-white.jpg",
  // },
  // {
  //   title: "Founders Mode: A revolução silenciosa da IA de verdade?",
  //   description:
  //     "Controlar suas emoções é fácil quando você sabe o caminho certo a seguir. Hoje vamos falar sobre um método revolucionário que está mudando vidas.",
  //   image: "/abstract-waves-black-white.jpg",
  // },
  // {
  //   title: "24 - O Nascimento",
  //   description:
  //     "Uma análise profunda sobre como as melhores ideias nascem e se desenvolvem. Descubra os padrões que grandes pensadores usam para criar inovação.",
  //   image: "/abstract-tree-growth-black-white.jpg",
  // },

 ]

export function ArticlesGrid() {
  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.filter(article => !!article.slug).slice(0,6).map((article, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Link href={`/blog/${article.slug}`}>
              <ArticleCard {...article} />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {[].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 text-sm transition-all duration-300 hover:scale-110 ${
                page === 1 ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
