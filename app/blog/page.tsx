import { Header } from "@/components/header-blog"
import { Hero } from "@/components/hero-blog"
import { ArticlesGrid } from "@/components/articles-grid-blog"
import { PodcastSection } from "@/components/podcast-section-blog"
import { Footer } from "@/components/footer-blog"
import { ScrollToTopButton } from "@/components/ScrollToTopButton-blog"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ArticlesGrid />
      <PodcastSection />
      <Footer />
      <ScrollToTopButton />

    </main>
  )
}
