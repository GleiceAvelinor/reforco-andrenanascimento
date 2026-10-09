"use client";

import React from "react";
import { AlertCircle, CheckCircle2, HeartHandshake, Sparkles, ArrowRight } from "lucide-react";
import { useAccessibility } from "./ThemeAndAccessibilityProvider";

export default function PainPoints() {
  const { trackWhatsAppClick } = useAccessibility();

  const comparisons = [
    {
      pain: "Choro, estresse e conflitos diários na hora de fazer o dever de casa.",
      solution: "Mediação pedagógica serena e rotina estruturada que devolve a harmonia à família.",
      accent: "border-l-rose-500",
    },
    {
      pain: "Dificuldades para juntar as letras e insegurança diante dos colegas de classe.",
      solution: "Método de alfabetização lúdica e afetuosa com jogos que despertam a paixão pelas palavras.",
      accent: "border-l-amber-500",
    },
    {
      pain: "Falta de foco, dispersão rápida e diagnósticos de TDAH ou bloqueios de aprendizagem.",
      solution: "Acompanhamento psicopedagógico clínico com mais de 30 anos de prática e estratégias neurocognitivas.",
      accent: "border-l-sky-500",
    },
    {
      pain: "Notas baixas em matemática, memorização mecânica e medo de avaliações escolares.",
      solution: "Estímulo ao raciocínio lógico através de bingos de tabuada, blocos didáticos e desafios divertidos.",
      accent: "border-l-emerald-500",
    },
  ];

  return (
    <section
      id="sobre-nos"
      aria-labelledby="pain-points-heading"
      className="py-16 sm:py-20 bg-white dark:bg-[#090D16] border-y border-amber-200/60 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-[#FFE600] text-slate-950 shadow-xs">
            <HeartHandshake className="w-4 h-4 text-rose-600" aria-hidden="true" />
            <span>Compreendemos o Desafio da Sua Família</span>
          </div>
          <h2
            id="pain-points-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 dark:text-white tracking-tight"
          >
            Aprender não precisa ser um momento de tensão e angústia.
          </h2>
          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
            Muitas crianças não têm falta de capacidade, mas sim barreiras pedagógicas ou emocionais que precisam do olhar certo. Veja a diferença do método <span className="font-handwriting text-rose-600 dark:text-amber-400 font-bold text-xl">André Nascimento</span>:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 sm:p-7 bg-amber-50/40 dark:bg-[#131B2E] border-2 border-amber-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow border-l-8 ${item.accent}`}
            >
              {/* Pain */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-rose-100 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5">
                  <AlertCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-black uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    O Desafio em Casa
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    {item.pain}
                  </p>
                </div>
              </div>

              {/* Transition Indicator */}
              <div className="flex items-center justify-center my-0.5 text-amber-500 dark:text-amber-400">
                <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" aria-hidden="true" />
              </div>

              {/* Solution */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-300 dark:border-emerald-800/80 shadow-xs">
                <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="block text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                    A Solução no Acompanhamento
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassuring CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() =>
              trackWhatsAppClick(
                "pain_points_cta",
                "Olá! Li sobre as dificuldades de aprendizagem no site e gostaria de agendar uma conversa com as professoras."
              )
            }
            className="touch-target inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-black text-sm sm:text-base text-slate-950 bg-[#FFE600] hover:bg-amber-400 border-2 border-amber-400 shadow-md hover:shadow-lg transition-all"
          >
            <Sparkles className="w-4 h-4 text-rose-600" aria-hidden="true" />
            <span>Deseja tirar dúvidas sobre a situação do seu filho? Fale conosco sem compromisso</span>
          </button>
        </div>
      </div>
    </section>
  );
}
