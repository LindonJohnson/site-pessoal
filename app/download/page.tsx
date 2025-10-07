import { Download, FileText, ArrowLeft } from "lucide-react";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Background pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8 md:py-12 lg:py-16">
        <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl">
          {/* Main Section */}
          <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-12 md:py-16">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

            <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-float rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-float-delayed rounded-full bg-primary/5 blur-3xl" />

            <div className="relative z-10 text-center w-full max-w-2xl">
              {/* Back Button */}
              <a
                href="/"
                className="absolute -top-8 left-0 group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="font-sans text-sm font-light">Voltar</span>
              </a>

              <div className="mb-6 md:mb-8 flex justify-center animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl" />
                  <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full border-4 border-background shadow-2xl ring-2 ring-primary/10 bg-card/80 backdrop-blur-sm flex items-center justify-center">
                    <FileText className="w-10 h-10 md:w-12 md:h-12 text-foreground" />
                  </div>
                </div>
              </div>

              <h1 className="mb-3 md:mb-4 animate-fade-in-up font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Plano de Treino
              </h1>
              <p className="mx-auto max-w-2xl animate-fade-in-up font-sans text-base md:text-lg lg:text-xl font-light text-muted-foreground px-4 mb-8 [animation-delay:100ms]">
                Baixe seu plano de treino completo em PDF e leve para a academia
              </p>

              {/* Download Button */}
              <div className="animate-fade-in-up [animation-delay:200ms]">
                <a
                  href="/Plano de treino.pdf"
                  download="Plano_de_Treino.pdf"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl md:rounded-2xl border border-border/50 bg-background/50 px-8 md:px-10 py-4 md:py-5 font-sans text-base md:text-lg font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-foreground/20 hover:bg-background/80 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <Download className="relative h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-y-1" />
                  <span className="relative">Baixar PDF</span>
                </a>
              </div>

              {/* Info Cards */}
              <div className="mt-12 grid gap-4 md:grid-cols-3 animate-fade-in [animation-delay:300ms]">
                <div className="rounded-xl border border-border/50 bg-background/50 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-foreground mb-1">
                    5
                  </div>
                  <div className="text-sm font-light text-muted-foreground">
                    Dias de Treino
                  </div>
                </div>
                <div className="rounded-xl border border-border/50 bg-background/50 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-foreground mb-1">
                    10+
                  </div>
                  <div className="text-sm font-light text-muted-foreground">
                    Exercícios por Dia
                  </div>
                </div>
                <div className="rounded-xl border border-border/50 bg-background/50 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-foreground mb-1">
                    PDF
                  </div>
                  <div className="text-sm font-light text-muted-foreground">
                    Formato Digital
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 animate-fade-in [animation-delay:400ms]">
                <p className="font-sans text-sm font-light text-muted-foreground">
                  Treino completo para iniciantes e intermediários com foco em
                  hipertrofia
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
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
    </div>
  );
}
