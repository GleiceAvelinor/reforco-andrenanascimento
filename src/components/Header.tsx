"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Type, Menu, X, MapPin, HandMetal, Phone } from "lucide-react";
import { useAccessibility } from "./ThemeAndAccessibilityProvider";
import BrandLogo from "./BrandLogo";
import InstagramIcon from "./InstagramIcon";

export default function Header() {
  const {
    theme,
    toggleTheme,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
  } = useAccessibility();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Professoras & Espaço", href: "#professoras" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas Frequentes", href: "#faq" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const openVLibrasWidget = () => {
    const vlibrasBtn = document.querySelector('[vw-access-button]') as HTMLElement | null;
    if (vlibrasBtn) {
      vlibrasBtn.click();
    } else {
      alert("O assistente VLibras está disponível no canto da tela.");
    }
  };

  return (
    <>
      {/* Skip to Main Content Link (WCAG 2.2 AA) */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {/* Top Brand Notification & Accessibility Bar */}
      <aside
        aria-label="Barra de ferramentas de acessibilidade"
        className="bg-[#FFE600] text-slate-950 font-medium text-xs py-1.5 px-4 border-b border-amber-300 dark:bg-amber-400 transition-colors shadow-xs"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Location Authority */}
          <div className="flex items-center gap-2 font-bold text-slate-950 text-xs">
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 inline text-rose-600" aria-hidden="true" />
              Fortaleza - CE
            </span>
            <span className="hidden sm:inline text-amber-700 font-bold">•</span>
            <span className="hidden sm:inline font-semibold">
              O objetivo é que nosso projeto e nossa família cresça cada vez mais! ✏️📐
            </span>
          </div>

          {/* Accessibility Controls */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            {/* VLibras shortcut */}
            <button
              onClick={openVLibrasWidget}
              type="button"
              className="touch-target inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-950 text-white hover:bg-slate-800 transition shadow-xs"
              aria-label="Ativar tradução em Língua Brasileira de Sinais (VLibras)"
              title="Ativar assistente VLibras"
            >
              <HandMetal className="w-3.5 h-3.5 text-amber-300" aria-hidden="true" />
              <span>VLibras</span>
            </button>

            {/* Font size adjustment group */}
            <div
              className="inline-flex items-center bg-white/90 rounded-lg border border-amber-400/80 p-0.5 text-slate-900 shadow-xs"
              role="group"
              aria-label="Controle de tamanho de fonte"
            >
              <button
                onClick={decreaseFontSize}
                type="button"
                className="px-2 py-1 text-xs font-bold rounded hover:bg-amber-100 text-slate-900 disabled:opacity-40"
                aria-label="Diminuir tamanho da fonte"
                title="Diminuir fonte"
                disabled={fontSize === "small"}
              >
                A-
              </button>
              <button
                onClick={resetFontSize}
                type="button"
                className="px-2 py-1 text-xs font-bold rounded hover:bg-amber-100 text-slate-900"
                aria-label="Restaurar tamanho padrão da fonte"
                title="Tamanho normal"
              >
                <Type className="w-3 h-3 inline mr-0.5" aria-hidden="true" /> A
              </button>
              <button
                onClick={increaseFontSize}
                type="button"
                className="px-2 py-1 text-xs font-bold rounded hover:bg-amber-100 text-slate-900 disabled:opacity-40"
                aria-label="Aumentar tamanho da fonte"
                title="Aumentar fonte"
                disabled={fontSize === "xlarge"}
              >
                A+
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              type="button"
              className="touch-target inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-950 text-white hover:bg-slate-800 transition shadow-xs"
              aria-label={`Alternar para tema ${theme === "light" ? "escuro" : "claro"}`}
              title={`Alternar para tema ${theme === "light" ? "escuro" : "claro"}`}
            >
              {theme === "light" ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-300" aria-hidden="true" />
                  <span className="hidden xs:inline">Escuro</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                  <span className="hidden xs:inline">Claro</span>
                </>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Header / Navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 dark:bg-[#131B2E]/95 backdrop-blur-md shadow-sm border-b border-amber-200/60 dark:border-slate-800"
            : "bg-white dark:bg-[#131B2E] border-b border-slate-200 dark:border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo */}
            <Link
              href="/"
              className="group focus-visible:rounded-lg focus-visible:outline-none"
              aria-label="Acompanhamento Pedagógico André Nascimento - Início"
            >
              <BrandLogo size="md" />
            </Link>

            {/* Desktop Navigation Links (Clean, without duplicate WhatsApp button) */}
            <nav
              aria-label="Navegação principal"
              className="hidden md:flex items-center gap-7 font-bold text-sm"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 dark:text-slate-200 hover:text-rose-600 dark:hover:text-amber-400 transition-colors py-2 border-b-2 border-transparent hover:border-rose-600 dark:hover:border-amber-400"
                >
                  {link.label}
                </a>
              ))}
              <span className="text-slate-400 font-normal">|</span>
              <a
                href="https://www.instagram.com/reforcoandrenascimento/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                aria-label="Acessar Instagram @reforcoandrenascimento"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C] dark:text-pink-400" aria-hidden="true" />
                @reforcoandrenascimento
              </a>
              <span className="text-slate-400 font-normal">|</span>
              <a
                href="https://wa.me/5585985363010?text=Ol%C3%A1%21+Vim+pelo+site+do+Acompanhamento+Pedag%C3%B3gico+Andr%C3%A9+Nascimento+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-rose-500" aria-hidden="true" />
                (85) 98536-3010
              </a>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="touch-target p-2 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-slate-800"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-amber-200 dark:border-slate-800 bg-white dark:bg-[#131B2E] px-4 py-4 shadow-xl animate-in slide-in-from-top-2"
          >
            <nav aria-label="Navegação móvel" className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-3 py-2.5 rounded-xl text-base font-bold text-slate-800 dark:text-slate-100 hover:bg-amber-50 dark:hover:bg-slate-800 hover:text-rose-600 dark:hover:text-amber-400 transition"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/reforcoandrenascimento/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-pink-50 dark:hover:bg-slate-800 flex items-center gap-2"
                >
                  <InstagramIcon className="w-4 h-4 text-[#E1306C] dark:text-pink-400" aria-hidden="true" />
                  Instagram: @reforcoandrenascimento
                </a>
                <a
                  href="https://wa.me/5585985363010?text=Ol%C3%A1%21+Vim+pelo+site+do+Acompanhamento+Pedag%C3%B3gico+Andr%C3%A9+Nascimento+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-green-50 dark:hover:bg-slate-800 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                  WhatsApp: (85) 98536-3010
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
