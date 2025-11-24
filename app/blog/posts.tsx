import { ReactNode } from "react";
import Image from "next/image";

export const posts: Array<{
  slug: string;
  title: string;
  content: ReactNode;
}> = [
  {
    slug: "regra-de-3-ou-1-2",
    title: "A Regra de 3 (ou 1/2)",
    content: (
      <>
        <p>Introdução do meu post...</p>
        
        {/* Imagem */}
        <Image 
          src="/images/exemplo.jpg" 
          alt="Descrição da imagem"
          width={800}
          height={600}
          className="rounded-lg my-6"
        />
        
        {/* Link */}
        <p>
          Veja mais informações em{" "}
          <a 
            href="https://exemplo.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            este site
          </a>
        </p>
        
        {/* Vídeo do YouTube */}
        <div className="aspect-video my-6">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
        
        <p>Continuação do texto...</p>
      </>
    ),
  },
  {
    slug: "ilusao-das-metas",
    title: "A Ilusão das Metas",
    content: (
      <>
        <h2 className="text-2xl font-bold mt-8 mb-4">Subtítulo</h2>
        
        <p>Primeiro parágrafo...</p>
        
        {/* Vídeo Local */}
        <video 
          controls 
          className="w-full rounded-lg my-6"
        >
          <source src="/videos/exemplo.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        
        {/* Lista */}
        <ul className="list-disc list-inside my-4">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </>
    ),
  },
];