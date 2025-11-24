import Image from "next/image"
import { Button } from "@/components/ui/button"


interface ArticleCardProps {
  title: string
  description: string
  image: string
  date?: string
}

export function ArticleCard({ title, description, image, date }: ArticleCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-muted rounded-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
        />
      </div>

      <h3 className="text-xl font-light mb-3 text-balance group-hover:text-foreground/80 transition-colors duration-300">{title}</h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>

      <Button variant="link" className="p-0 h-auto font-light text-sm transition-transform duration-300 group-hover:translate-x-1">
        LEIA MAIS →
      </Button>
    </article>
  )
}
