"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

export default function GalleryAndSocialProof() {
  const testimonials = [
    {
      author: "Patrícia M. Bezerra",
      role: "Mãe do Lucas (6 anos, 1º ano)",
      text: "Meu filho tinha crises de choro para tentar ler pequenas palavras e já estava pegando trauma da escola. A professora Bete teve uma paciência infinita. Em menos de dois meses com os jogos lúdicos, ele começou a ler tudo pela rua! A autoestima dele renasceu.",
      date: "Fortaleza - CE",
    },
    {
      author: "Carlos Eduardo Nogueira",
      role: "Pai da Sofia (9 anos, 4º ano)",
      text: "A Sofia sempre teve muita dificuldade com foco e tabuada. O acompanhamento da professora Maura foi um divisor de águas. Os bingos de matemática e a rotina de estudos organizada fizeram as notas dela subirem de 6 para 9,5 no colégio.",
      date: "Fortaleza - CE",
    },
    {
      author: "Juliana Silveira",
      role: "Mãe do Theo (8 anos, 3º ano)",
      text: "O Theo tem diagnóstico de TDAH e a psicopedagogia da RAN foi a melhor escolha que fizemos. Elas realmente compreendem o tempo da criança, sem rotular ou forçar. Ele adora ir para as aulas e chega em casa com as tarefas todas prontas.",
      date: "Fortaleza - CE",
    },
  ];

  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-heading"
      className="py-12 sm:py-16 bg-[#FFFDF7] dark:bg-[#090D16] border-t border-amber-200/60 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="flex items-center justify-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" aria-hidden="true" />
            ))}
          </div>
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight"
          >
            O Que Dizem os Pais e Responsáveis
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
            Depoimentos reais de quem acompanha a evolução diária dos filhos no Acompanhamento Pedagógico André Nascimento.
          </p>
        </div>

        {/* Compact 3 Testimonials in a clean grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-3xl bg-white dark:bg-[#131B2E] border-2 border-amber-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-rose-500/20 absolute top-4 right-4" aria-hidden="true" />
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <h3 className="font-black text-slate-900 dark:text-white text-sm">
                  {t.author}
                </h3>
                <p className="text-[11px] font-bold text-rose-600 dark:text-amber-400">
                  {t.role} • {t.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
