"use client";

import React from "react";
import { BookOpen, Brain, Dice5, GraduationCap, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "alfabetizacao-ludica",
      title: "Alfabetização Lúdica",
      badge: "Infantil 4 ao 2º ano",
      badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 border-rose-300",
      icon: BookOpen,
      iconColor: "text-rose-600 bg-rose-50 dark:bg-rose-950/40",
      description:
        "Leitura e escrita com abordagens dinâmicas, cantigas, histórias interativas e consciência fonológica sem pressão.",
      features: [
        "Reconhecimento de sons e letras com afeto",
        "Formação de sílabas e vocabulário",
        "Coordenação motora e gosto pela leitura",
      ],
    },
    {
      id: "psicopedagogico",
      title: "Acompanhamento Psicopedagógico",
      badge: "Suporte Individual",
      badgeColor: "bg-sky-100 text-sky-800 dark:bg-sky-950/70 dark:text-sky-300 border-sky-300",
      icon: Brain,
      iconColor: "text-sky-600 bg-sky-50 dark:bg-sky-950/40",
      description:
        "Suporte individualizado para vencer barreiras de aprendizagem, TDAH, dislexia e bloqueios emocionais com mais de 30 anos de prática clínica.",
      features: [
        "Avaliação diagnóstica cuidadosa",
        "Estratégias de foco e concentração",
        "Resgate da autoconfiança escolar",
      ],
    },
    {
      id: "raciocinio-logico",
      title: "Raciocínio Lógico & Didática",
      badge: "Jogos & Cognição",
      badgeColor: "bg-amber-100 text-amber-900 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300",
      icon: Dice5,
      iconColor: "text-amber-700 bg-amber-50 dark:bg-amber-950/40",
      description:
        "Jogos pedagógicos e dinâmicas cognitivas (bingos de tabuada, desafios espaciais e blocos lógicos) que desmistificam a matemática.",
      features: [
        "Bingos de tabuada e números concretos",
        "Pensamento estratégico e dedutivo",
        "Fim do medo das ciências exatas",
      ],
    },
    {
      id: "fundamental",
      title: "Reforço Fundamental I e II",
      badge: "3º ao 6º ano",
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300",
      icon: GraduationCap,
      iconColor: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40",
      description:
        "Apoio consistente nas tarefas de casa diárias, preparação para avaliações e rotina organizada para criar hábitos autônomos de estudo.",
      features: [
        "Acompanhamento dos deveres escolares",
        "Revisão ativa para provas e simulados",
        "Autonomia e melhoria de notas no colégio",
      ],
    },
  ];

  return (
    <section
      id="servicos"
      aria-labelledby="servicos-heading"
      className="py-12 sm:py-16 bg-[#FFFDF7] dark:bg-[#090D16] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="inline-block px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#FFE600] text-slate-950">
            Metodologia & Serviços
          </span>
          <h2
            id="servicos-heading"
            className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight"
          >
            Acompanhamento Especializado para Cada Fase
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
            Mais de 30 anos unindo afeto, jogos pedagógicos e acompanhamento personalizado em Fortaleza.
          </p>
        </div>

        {/* Services Grid (Compact 4 columns on lg, 2 on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="rounded-3xl p-6 bg-white dark:bg-[#131B2E] border-2 border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-amber-400 dark:hover:border-amber-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`p-3 rounded-2xl ${service.iconColor}`}>
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2" aria-label={`Diferenciais do serviço ${service.title}`}>
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
