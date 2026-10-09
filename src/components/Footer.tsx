"use client";

import React from "react";
import { MapPin, Phone, MessageCircle, Heart, ShieldCheck, CheckCircle2 } from "lucide-react";
import BrandLogo from "./BrandLogo";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  return (
    <footer
      aria-label="Rodapé do site"
      className="bg-[#090D16] text-slate-300 pt-12 pb-14 border-t-4 border-[#FFE600]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-3">
            <BrandLogo size="md" variant="onDark" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              Alfabetização com afeto e reforço escolar do Infantil 4 ao 6º ano em Fortaleza. Mais de 30 anos transformando o aprendizado com acolhimento e método.
            </p>
            <p className="text-xs text-amber-300 font-bold italic">
              &ldquo;O objetivo é que nosso projeto e nossa família cresça cada vez mais.&rdquo;
            </p>
            <div className="pt-2">
              <a
                href="https://www.instagram.com/reforcoandrenascimento/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white text-xs font-bold shadow-md hover:opacity-95 hover:scale-[1.02] transition-all"
                aria-label="Acessar o perfil oficial no Instagram @reforcoandrenascimento"
              >
                <InstagramIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Siga @reforcoandrenascimento</span>
              </a>
            </div>
          </div>

          {/* Column 2: Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#FFE600]">
              Localização & Contato
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Fortaleza - CE • Atendimento Presencial Climatizado</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <a href="https://wa.me/5585985363010?text=Ol%C3%A1%21+Vim+pelo+site+do+Acompanhamento+Pedag%C3%B3gico+Andr%C3%A9+Nascimento+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">Telefone / WhatsApp: (85) 98536-3010</a>
              </li>
              <li className="flex items-start gap-2">
                <InstagramIcon className="w-4 h-4 text-[#E1306C] shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="https://www.instagram.com/reforcoandrenascimento/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:underline"
                >
                  Instagram: @reforcoandrenascimento
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Horários: Segunda a Sexta, turnos Manhã e Tarde</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Membership & Accessibility */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-[#FFE600]">
              Reconhecimento & Inclusão
            </h4>
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-slate-900 text-amber-300 border border-amber-400/40">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                Membro da Rede Reforço Brasil
              </span>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Em conformidade com <strong>WCAG 2.2 Nível AA</strong>, suporte a leitores de tela e atalho para o VLibras.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with User's custom credit preserved */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 font-medium">
          <p>© 2026 Acompanhamento Pedagógico André Nascimento. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            <span>Desenvolvido por </span>
            <a
              href="https://wa.me/5585994378208?text=Ol%C3%A1%20Gleice%2C%20vim%20pelo%20site%20do%20Acompanhamento%20Pedag%C3%B3gico%20Andr%C3%A9%20Nascimento%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-300 hover:text-amber-200 hover:underline transition-colors"
              aria-label="Entrar em contato com Gleice Avelino pelo WhatsApp"
            >
              Gleice Avelino
            </a>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
