import {
  Dumbbell,
  Calendar,
  TrendingUp,
  Clock,
  Target,
  ArrowLeft,
  Download,
} from "lucide-react";

export default function WorkoutPlan() {
  const workouts = [
    {
      day: "Segunda-feira",
      title: "TREINO A",
      groups: [
        {
          name: "🏆 Peito",
          exercises: [
            { name: "Supino reto", series: "4x", reps: "6 a 12" },
            { name: "Supino Inclinado", series: "4x", reps: "8 a 12" },
            { name: "Crucifixo", series: "4x", reps: "10 a 12" },
            { name: "Voador peitoral", series: "3x", reps: "10 a 12" },
          ],
        },
        {
          name: "🏆 Bíceps",
          exercises: [
            { name: "Rosca direta", series: "4x", reps: "8 a 12" },
            {
              name: "Rosca Scott (ou concentrada)",
              series: "3x",
              reps: "6 a 12",
            },
            {
              name: "Rosca inclinada com halteres",
              series: "4x",
              reps: "8 a 12",
            },
          ],
        },
      ],
    },
    {
      day: "Terça-feira",
      title: "TREINO B",
      groups: [
        {
          name: "🏆 Perna",
          exercises: [
            { name: "Agachamento livre", series: "4x", reps: "10 a 12" },
            { name: "Extensora", series: "4x", reps: "8 a 12" },
            { name: "Leg press", series: "4x", reps: "10 a 12" },
          ],
        },
        {
          name: "🏆 Panturrilhas",
          exercises: [
            { name: "Panturrilha em pé", series: "4x", reps: "8 a 12" },
            { name: "Panturrilha sentado", series: "4x", reps: "10 a 12" },
          ],
        },
      ],
    },
    {
      day: "Quarta-feira",
      title: "TREINO C",
      groups: [
        {
          name: "🏆 Costas",
          exercises: [
            { name: "Barra fixa", series: "4x", reps: "10 a 12" },
            { name: "Remada curvada", series: "4x", reps: "8 a 12" },
            { name: "Puxada alta", series: "4x", reps: "10 a 12" },
            {
              name: "Remada unilateral com halteres",
              series: "4x",
              reps: "10 a 12",
            },
          ],
        },
        {
          name: "🏆 Tríceps",
          exercises: [
            { name: "Tríceps pulley", series: "4x", reps: "8 a 12" },
            { name: "Tríceps francês", series: "4x", reps: "10 a 12" },
          ],
        },
      ],
    },
    {
      day: "Quinta-feira",
      title: "TREINO D",
      groups: [
        {
          name: "🏆 Peito Inferior",
          exercises: [
            { name: "Supino Declinado", series: "4x", reps: "10 a 12" },
            { name: "Crucifixo declinado", series: "4x", reps: "10 a 12" },
          ],
        },
        {
          name: "🏆 Ombro",
          exercises: [
            {
              name: "Desenvolvimento com halteres",
              series: "4x",
              reps: "8 a 12",
            },
            { name: "Facepull (cabo)", series: "4x", reps: "8 a 12" },
            { name: "Desenvolvimento militar", series: "3x", reps: "8 a 12" },
            {
              name: "Elevação lateral com halteres",
              series: "3x",
              reps: "8 a 12",
            },
          ],
        },
      ],
    },
    {
      day: "Sexta-feira",
      title: "TREINO E",
      groups: [
        {
          name: "🏆 Perna Posterior",
          exercises: [
            { name: "Cadeira flexora", series: "4x", reps: "10 a 12" },
            {
              name: "Cadeira flexora unilateral",
              series: "4x",
              reps: "10 a 12",
            },
            { name: "Stiff com halteres", series: "4x", reps: "10 a 12" },
            { name: "Sumô", series: "4x", reps: "10 a 12" },
          ],
        },
        {
          name: "🏆 Abdômen",
          exercises: [
            {
              name: "Elevação de pernas na barra fixa",
              series: "4x",
              reps: "8 a 12",
            },
            { name: "Prancha frontal", series: "3x", reps: "45s - 60s" },
            { name: "Crunch na polia", series: "3x", reps: "8 a 12" },
            { name: "Abdômen máquina", series: "3x", reps: "8 a 12" },
          ],
        },
      ],
    },
  ];

  const principles = [
    { icon: Target, text: "Alta intensidade (carga entre 70-85% 1RM)" },
    {
      icon: TrendingUp,
      text: "Volume adequado (10–20 séries semanais por músculo)",
    },
    {
      icon: Dumbbell,
      text: "Execução controlada e foco em contração excêntrica",
    },
    {
      icon: Clock,
      text: "Descanso entre séries (~1 a 2 minutos para isolados, 2–3 min para compostos pesados)",
    },
    {
      icon: Calendar,
      text: "Progressão semanal (aumento gradual de carga ou repetições)",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Background pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8 md:py-12 lg:py-16">
        <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-border/50 bg-card/80 backdrop-blur-xl shadow-2xl">
          {/* Hero Section */}
          <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden px-4 py-12 md:py-16">
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
                    <Dumbbell className="w-10 h-10 md:w-12 md:h-12 text-foreground" />
                  </div>
                </div>
              </div>

              <h1 className="mb-3 md:mb-4 animate-fade-in-up font-sans text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Plano de Treino
              </h1>
              <p className="mx-auto max-w-2xl animate-fade-in-up font-sans text-base md:text-lg lg:text-xl font-light text-muted-foreground px-4 [animation-delay:100ms]">
                Musculação Completa - 5 Dias por Semana
              </p>

              <div className="mt-6 inline-block animate-fade-in rounded-full border border-border/50 bg-background/50 px-4 py-2 text-sm font-light text-muted-foreground backdrop-blur-sm [animation-delay:200ms]">
                Nível: Iniciante a Intermediário
              </div>
            </div>
          </section>

          {/* Principles Section */}
          <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 border-t border-border/50">
            <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-foreground mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-muted-foreground" />
              Princípios do Treino
            </h2>
            <div className="grid gap-3 md:gap-4">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/50 p-4 md:p-5 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-background/80"
                  style={{
                    animation: `fade-in-up 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <principle.icon className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-foreground" />
                    <p className="font-sans text-sm md:text-base font-light text-muted-foreground">
                      {principle.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Workout Days */}
          <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 border-t border-border/50">
            <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-foreground mb-6">
              Treinos da Semana
            </h2>
            <div className="space-y-4 md:space-y-5">
              {workouts.map((workout, dayIndex) => (
                <div
                  key={dayIndex}
                  className="group relative overflow-hidden rounded-xl md:rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-foreground/20 hover:bg-background/80 hover:shadow-xl hover:shadow-primary/5"
                  style={{
                    animation: `fade-in-up 0.5s ease-out ${
                      dayIndex * 0.1
                    }s both`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative border-b border-border/50 px-5 md:px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                          {workout.day}
                        </h3>
                        <p className="font-sans text-sm font-light text-muted-foreground">
                          {workout.title}
                        </p>
                      </div>
                      <Calendar className="w-6 h-6 md:w-7 md:h-7 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="relative p-5 md:p-6">
                    {workout.groups.map((group, groupIndex) => (
                      <div
                        key={groupIndex}
                        className={groupIndex > 0 ? "mt-6 md:mt-8" : ""}
                      >
                        <h4 className="font-sans text-lg md:text-xl font-semibold tracking-tight text-foreground mb-3 md:mb-4">
                          {group.name}
                        </h4>
                        <div className="space-y-2">
                          {group.exercises.map((exercise, exIndex) => (
                            <div
                              key={exIndex}
                              className="flex items-center justify-between p-3 md:p-4 rounded-lg border border-border/30 bg-card/30 hover:bg-card/50 hover:border-border/50 transition-all duration-300"
                            >
                              <span className="font-sans text-sm md:text-base font-normal text-foreground flex-1">
                                {exercise.name}
                              </span>
                              <div className="flex items-center gap-2 md:gap-4 text-sm">
                                <span className="px-2.5 md:px-3 py-1 rounded-full border border-border/50 bg-background/50 text-foreground font-semibold text-xs md:text-sm">
                                  {exercise.series}
                                </span>
                                <span className="font-sans text-muted-foreground font-light min-w-[70px] md:min-w-[80px] text-right text-xs md:text-sm">
                                  {exercise.reps} reps
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quote Section */}
          <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 border-t border-border/50 bg-background/30 backdrop-blur-sm">
            <blockquote className="text-center animate-fade-in">
              <p className="font-sans text-lg md:text-xl lg:text-2xl font-light italic mb-3 md:mb-4 text-foreground">
                "Somos o que fazemos repetidamente. Excelência, então, não é um
                ato, mas um hábito."
              </p>
              <cite className="font-sans text-sm md:text-base font-light text-muted-foreground">
                — Aristóteles
              </cite>
            </blockquote>
          </section>

          {/* Tips Section */}
          <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 border-t border-border/50">
            <h3 className="font-sans text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4 md:mb-6">
              💡 Dicas Importantes
            </h3>
            <ul className="space-y-3 font-sans text-sm md:text-base font-light text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-foreground font-bold">•</span>
                <span>
                  Mantenha sempre a hidratação adequada durante o treino
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-bold">•</span>
                <span>Faça aquecimento antes de começar os exercícios</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-bold">•</span>
                <span>Respeite os dias de descanso (sábado e domingo)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground font-bold">•</span>
                <span>
                  Consulte um profissional de educação física para ajustes
                  personalizados
                </span>
              </li>
            </ul>
          </section>
          {/* Button Download */}
          <div className=" flex justify-center animate-fade-in-up [animation-delay:200ms] mb-8">
            <a
              href="/download"
              // download="Plano_de_Treino.pdf"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl md:rounded-2xl border border-border/50 bg-background/50 px-8 md:px-10 py-4 md:py-5 font-sans text-base md:text-lg font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-foreground/20 hover:bg-background/80 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <Download className="relative h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-y-1" />
              <span className="relative">Baixar PDF</span>
            </a>
          </div>

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
