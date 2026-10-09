"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { useAccessibility, DEFAULT_WHATSAPP_MESSAGE } from "./ThemeAndAccessibilityProvider";

export default function StickyWhatsApp() {
  const { trackWhatsAppClick, whatsappUrl } = useAccessibility();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show supportive prompt bubble after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2"
      aria-label="Atendimento rápido pelo WhatsApp"
    >
      {/* Help bubble tooltip */}
      {showTooltip && (
        <div className="relative max-w-xs bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3.5 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            type="button"
            className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-slate-300 text-xs shadow-xs"
            aria-label="Fechar mensagem de ajuda"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-green-700 dark:text-green-400">
              Professoras Online em Fortaleza
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Dúvidas sobre matrículas ou avaliação inicial? Fale diretamente conosco agora mesmo!
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("sticky_floating_whatsapp", DEFAULT_WHATSAPP_MESSAGE)}
        className="touch-target group flex items-center gap-3 px-5 py-3.5 rounded-full font-extrabold text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 shadow-2xl shadow-green-600/40 hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
        aria-label="Falar pelo WhatsApp com a equipe do Reforço André Nascimento no número 85 98536-3010"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform" aria-hidden="true" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          WhatsApp (85) 98536-3010
        </span>
      </a>
    </div>
  );
}
