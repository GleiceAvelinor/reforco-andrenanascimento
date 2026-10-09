"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

export default function FaqSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    faq_1: true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqs: FaqItem[] = [
    {
      id: "faq_1",
      question: "Qual é a faixa etária atendida no Acompanhamento André Nascimento?",
      answer: (
        <p>
          Atendemos crianças a partir de <strong>4 anos de idade</strong> (Infantil 4 e 5) até o <strong>6º ano do Ensino Fundamental</strong>. O espaço conta com metodologia lúdica e materiais para cada fase do desenvolvimento.
        </p>
      ),
    },
    {
      id: "faq_2",
      question: "Quais são as modalidades de atendimento e horários disponíveis?",
      answer: (
        <p>
          Atendimento nos turnos <strong>matutino e vespertino</strong> (contraturno escolar), com opções de <strong>turmas reduzidas</strong> para atenção próxima ou <strong>atendimento psicopedagógico individualizado</strong>.
        </p>
      ),
    },
    {
      id: "faq_3",
      question: "Onde fica localizado o espaço em Fortaleza e como agendar uma visita?",
      answer: (
        <p>
          Nosso espaço está localizado em <strong>Fortaleza - CE</strong>, em ambiente climatizado, seguro e acolhedor. O agendamento é feito de forma simples e rápida diretamente pelo WhatsApp no topo da página.
        </p>
      ),
    },
  ];

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-12 sm:py-16 bg-white dark:bg-[#090D16] border-t border-amber-200/60 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-black bg-[#FFE600] text-slate-950">
            <HelpCircle className="w-3.5 h-3.5 text-rose-600" aria-hidden="true" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight"
          >
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accessible Accordion (Compact: 3 main items) */}
        <div className="space-y-3" role="region" aria-label="Perguntas e respostas frequentes">
          {faqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            const buttonId = `faq-btn-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border-2 border-amber-200/80 dark:border-slate-800 bg-[#FFFDF7] dark:bg-[#131B2E] overflow-hidden transition-all shadow-xs"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="touch-target w-full px-5 py-4 flex items-center justify-between text-left gap-3 font-black text-sm sm:text-base text-slate-950 dark:text-white hover:text-rose-600 dark:hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-rose-600" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed border-t border-amber-200/50 dark:border-slate-800/80 animate-in fade-in-50 duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
