"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, Award, Heart, Sparkles } from "lucide-react";

export default function AboutTeachers() {
  const teachers = [
    {
      name: "Profª Maura André",
      role: "Pedagoga & Psicopedagoga",
      experience: "Mais de 30 anos de atuação",
      badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 border-rose-300",
      degrees: [
        "Graduada em Pedagogia",
        "Pós-graduada em Psicopedagogia Clínica e Institucional",
        "30+ anos dedicados ao desenvolvimento cognitivo infantil em Fortaleza",
      ],
      description:
        "Especialista em identificar bloqueios na aprendizagem, TDAH e reestruturar a autoconfiança de crianças com dificuldades escolares, unindo afeto e ciência.",
      image: "/images/professora-maura.jpg",
      imageAlt:
        "Professora Maura André sorrindo gentilmente em sala de atendimento psicopedagógico",
      quote: "Cada criança tem seu ritmo e sua genialidade. Nossa missão é encontrar a chave que abre esse potencial.",
    },
    {
      name: "Profª Bete André",
      role: "Pedagoga & Especialista em Alfabetização",
      experience: "Especialista em Letramento",
      badgeColor: "bg-[#FFE600] text-slate-950 border-amber-400",
      degrees: [
        "Graduada em Pedagogia",
        "Pós-graduada em Alfabetização e Letramento Lúdico",
        "Especialista em metodologias ativas e consciência fonológica",
      ],
      description:
        "Apaixonada por ensinar a ler e escrever através de dinâmicas prazerosas, histórias e jogos de palavras, tornando os primeiros passos na leitura leves e seguros.",
      image: "/images/professora-bete.jpg",
      imageAlt:
        "Professora Bete André sorrindo com livro de histórias infantis",
      quote: "Alfabetizar não é apenas decifrar letras, é abrir portas para que a criança imagine e seja feliz.",
    },
  ];

  const galleryImages = [
    {
      title: "Jogos & Raciocínio",
      image: "/images/galeria-jogos.jpg",
      alt: "Crianças jogando matemática e blocos com professora",
    },
    {
      title: "Letramento Ativo",
      image: "/images/galeria-leitura.jpg",
      alt: "Criança lendo livro com letras coloridas",
    },
    {
      title: "Tangram & Foco",
      image: "/images/galeria-tangram.jpg",
      alt: "Aluna resolvendo quebra-cabeça e figuras geométricas",
    },
  ];

  return (
    <section
      id="professoras"
      aria-labelledby="teachers-heading"
      className="py-12 sm:py-16 bg-white dark:bg-[#090D16] border-t border-amber-200/60 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-black bg-[#FFE600] text-slate-950">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" aria-hidden="true" />
            <span>Corpo Docente & Espaço</span>
          </div>
          <h2
            id="teachers-heading"
            className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight"
          >
            Quem Somos: Conheça as Fundadoras
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium">
            Acompanhamento direto com educadoras pós-graduadas e apaixonadas pela educação infantil em Fortaleza.
          </p>
        </div>

        {/* Teachers Cards (Compact & Elegant) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {teachers.map((teacher, index) => (
            <article
              key={index}
              className="rounded-3xl p-6 sm:p-7 bg-[#FFFDF0] dark:bg-[#131B2E] border-2 border-amber-200/80 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row gap-5 items-center sm:items-start"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-white dark:border-slate-700 relative">
                <Image
                  src={teacher.image}
                  alt={teacher.imageAlt}
                  width={240}
                  height={240}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="flex-1 space-y-2.5 text-left">
                <div>
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black border ${teacher.badgeColor} mb-1`}>
                    <Award className="w-3 h-3" aria-hidden="true" />
                    {teacher.experience}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-slate-950 dark:text-white">
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-bold text-rose-600 dark:text-rose-400">
                    {teacher.role}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  {teacher.description}
                </p>

                <ul className="space-y-1 pt-0.5" aria-label={`Qualificações de ${teacher.name}`}>
                  {teacher.degrees.map((deg, dIndex) => (
                    <li key={dIndex} className="flex items-start gap-1.5 text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                      <GraduationCap className="w-3 h-3 text-sky-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{deg}</span>
                    </li>
                  ))}
                </ul>

                <blockquote className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border-l-4 border-rose-500 text-xs italic font-medium text-slate-700 dark:text-slate-200">
                  <span className="font-handwriting font-bold text-slate-900 dark:text-amber-200">
                    &ldquo;{teacher.quote}&rdquo;
                  </span>
                </blockquote>
              </div>
            </article>
          ))}
        </div>

        {/* Integrated 3-photo activity gallery strip */}
        <div className="pt-2">
          <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
            <Sparkles className="w-4 h-4 text-amber-500" aria-hidden="true" />
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Rotina das Aulas em Fortaleza
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {galleryImages.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-amber-200/80 dark:border-slate-800 shadow-xs group"
              >
                <div className="relative w-full" style={{ paddingBottom: '62.5%' }}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-3 text-white">
                    <span className="text-xs font-bold">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
