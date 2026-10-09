"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Award, Brain, ShieldCheck, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-6 pb-12 lg:pt-10 lg:pb-16 bg-gradient-to-b from-[#FFFDF0] via-[#FFFBEB]/40 to-white dark:from-[#090D16] dark:via-[#131B2E] dark:to-[#090D16] transition-colors"
    >
      {/* Subtle ambient background warm glows */}
      <div
        className="absolute top-0 right-10 -z-10 w-[450px] h-[350px] bg-gradient-to-br from-[#FFE600]/20 via-rose-300/10 to-transparent dark:from-amber-600/10 dark:via-rose-900/10 dark:to-transparent blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Slogan Banner */}
        <div className="mb-5 inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white dark:bg-[#131B2E] border-2 border-[#FFE600] dark:border-amber-400/50 shadow-xs">
          <span className="px-2 py-0.5 rounded-lg bg-[#FFE600] text-slate-950 font-black text-xs">
            FAMÍLIA & MÉTODO
          </span>
          <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-amber-200">
            &ldquo;O objetivo é que nosso projeto e nossa família cresça cada vez mais&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Headline, Authority Badges, Sole WhatsApp CTA */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-black tracking-tight text-slate-950 dark:text-white leading-[1.15]"
            >
              Alfabetização com{" "}
              <span className="relative inline-block text-rose-600 dark:text-rose-400">
                <span className="font-handwriting text-[1.15em] font-bold">diversão</span>
                <span className="absolute left-0 -bottom-1 w-full h-2 bg-[#FFE600] -z-10 rounded-full" />
              </span>{" "}
              e reforço escolar do{" "}
              <span className="text-sky-600 dark:text-sky-400">
                Infantil 4 ao 6º ano
              </span>{" "}
              em Fortaleza.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed max-w-2xl">
              Acompanhamento psicopedagógico e pedagógico com mais de 30 anos de experiência, focado no desenvolvimento integral, na rotina de estudos e na confiança do seu filho.
            </p>

            {/* Compact Authority Badges */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1"
              aria-label="Diferenciais de Autoridade"
            >
              {/* Badge 1 */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-[#131B2E] border-2 border-sky-200 dark:border-sky-900 shadow-xs">
                <div className="p-2 rounded-lg bg-sky-100 dark:bg-sky-900/60 text-sky-600 dark:text-sky-300">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <span className="block text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    Presencial
                  </span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                    Fortaleza - CE
                  </span>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-[#131B2E] border-2 border-rose-200 dark:border-rose-900 shadow-xs">
                <div className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900/60 text-rose-600 dark:text-rose-300">
                  <Award className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <span className="block text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    Membro Oficial
                  </span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                    Rede Reforço Brasil
                  </span>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white dark:bg-[#131B2E] border-2 border-amber-300 dark:border-amber-700 shadow-xs">
                <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300">
                  <Brain className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <span className="block text-[9px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                    Tradição
                  </span>
                  <span className="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                    +30 Anos na Educação
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Primary CTA → scrolls to WhatsApp sticky or opens directly */}
                <a
                  href="https://wa.me/5585985363010?text=Ol%C3%A1%21+Vim+pelo+site+do+Acompanhamento+Pedag%C3%B3gico+Andr%C3%A9+Nascimento+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-black text-base text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 shadow-lg shadow-green-600/25 hover:scale-[1.02] active:scale-[0.99] transition-all"
                  aria-label="Falar pelo WhatsApp (85) 98536-3010"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.855L.057 23.272a.75.75 0 0 0 .92.92l5.41-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.731 9.731 0 0 1-5.004-1.38l-.36-.214-3.733 1.013 1.013-3.733-.214-.36A9.731 9.731 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
                  Falar pelo WhatsApp
                </a>

                <a
                  href="#servicos"
                  className="touch-target inline-flex items-center justify-center px-5 py-4 rounded-2xl font-bold text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-[#131B2E] hover:bg-amber-50 dark:hover:bg-slate-800 border-2 border-amber-300 dark:border-slate-700 transition-colors"
                >
                  Ver Metodologia & Horários
                </a>
              </div>

              <p className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-green-600 dark:text-green-400 inline shrink-0" aria-hidden="true" />
                <span>Atendimento direto com as professoras fundadoras • Avaliação inicial sem compromisso</span>
              </p>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -inset-2 bg-gradient-to-r from-[#FFE600] via-rose-500 to-sky-500 rounded-3xl blur-md opacity-30"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-[#131B2E] bg-white dark:bg-slate-800">
                <Image
                  src="/images/hero-pedagogas.jpg"
                  alt="Professoras Maura André e Bete André sorrindo acolhedoramente em sala de reforço escolar com jogos pedagógicos e alunos ao fundo em Fortaleza"
                  width={720}
                  height={540}
                  priority
                  className="w-full h-auto object-cover object-center"
                />

                <div className="absolute bottom-3 left-3 right-3 bg-white/95 dark:bg-[#131B2E]/95 backdrop-blur-md p-3 rounded-2xl shadow-md border-2 border-[#FFE600] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950/80 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0">
                    <Heart className="w-5 h-5 fill-current" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-950 dark:text-white leading-tight">
                      Ambiente Seguro & Lúdico em Fortaleza
                    </p>
                    <p className="text-[11px] font-medium text-slate-600 dark:text-slate-300">
                      Turmas reduzidas e atenção individualizada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
