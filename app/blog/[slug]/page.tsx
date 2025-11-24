import { notFound } from "next/navigation";
import { Header } from "@/components/header-blog";
import { Footer } from "@/components/footer-blog";
import { posts } from "../posts";


// const posts = [
//   {
//     slug: "regra-de-3-ou-1-2",
//     title: "A Regra de 3 (ou 1/2)",
//     content: `
//       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//     `,
//   },
//   // adicione os outros...
// ];

export default async function PostPage({ params }: { params: Promise < { slug: string } > }) {
  const {slug} = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen">
      <Header />

      <article className="max-w-3xl mx-auto px-4 py-30">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        <div className="prose prose-neutral dark:prose-invert">
          {post.content}
        </div>
      </article>

      <Footer />
    </main>
  );
}
