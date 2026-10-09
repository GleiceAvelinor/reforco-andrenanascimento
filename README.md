# Acompanhamento Pedagógico André Nascimento — Site Institucional

> Site institucional do **Acompanhamento Pedagógico André Nascimento**, especializado em alfabetização lúdica e reforço escolar do Infantil 4 ao 6º ano em Fortaleza - CE.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Stack Tecnológica](#stack-tecnológica)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Componentes](#componentes)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Execução](#instalação-e-execução)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Segurança](#segurança)
- [SEO & Acessibilidade](#seo--acessibilidade)
- [Deploy](#deploy)
- [Créditos](#créditos)

---

## Visão Geral

Landing page institucional de alta conversão com:

- ✅ **Design responsivo** — mobile-first, funciona em todos os dispositivos
- ✅ **Tema claro/escuro** — alternância com persistência via `localStorage`
- ✅ **Acessibilidade WCAG 2.2 AA** — suporte a leitores de tela, VLibras, atalhos de teclado, controle de tamanho de fonte
- ✅ **SEO avançado** — JSON-LD Schema.org, Open Graph, Twitter Card, sitemap
- ✅ **Segurança** — CSP, HSTS, X-Frame-Options, Permissions-Policy e mais
- ✅ **WhatsApp integrado** — todos os CTAs abrem com mensagem pré-preenchida
- ✅ **Performance** — Turbopack, cache de componentes, imagens otimizadas via `next/image`

---

## Stack Tecnológica

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Framework | [Next.js](https://nextjs.org) | 16.4.0 |
| UI Library | [React](https://react.dev) | 19.3.0 |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) | ^4 |
| Bundler | Turbopack (nativo Next.js) | — |
| Ícones | [Lucide React](https://lucide.dev) | ^1.53.0 |
| Fontes | [Plus Jakarta Sans + Kalam](https://fonts.google.com) via `next/font` | — |
| Linguagem | TypeScript | ^5 |
| Linting | ESLint + eslint-config-next | 16.4.0 |

---

## Estrutura do Projeto

```
RAN-SITE/
├── public/
│   ├── images/                  # Imagens estáticas (hero, galeria, etc.)
│   ├── robots.txt               # Controle de crawlers e bots
│   └── .well-known/
│       └── security.txt         # RFC 9116 – contato de segurança
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout: SEO, fontes, scripts, meta tags
│   │   ├── page.tsx             # Página principal (assembla todos os componentes)
│   │   └── globals.css          # Estilos globais e tokens CSS
│   │
│   └── components/
│       ├── Header.tsx           # Barra de acessibilidade + navegação sticky
│       ├── Hero.tsx             # Seção hero com CTA principal
│       ├── Services.tsx         # Serviços oferecidos
│       ├── AboutTeachers.tsx    # Apresentação das professoras fundadoras
│       ├── GalleryAndSocialProof.tsx  # Galeria e prova social
│       ├── FaqSection.tsx       # Perguntas frequentes (accordion)
│       ├── Footer.tsx           # Rodapé com contatos, Instagram e créditos
│       ├── StickyWhatsApp.tsx   # Botão flutuante de WhatsApp (canto inferior direito)
│       ├── BrandLogo.tsx        # Logotipo reutilizável (variantes light/dark)
│       ├── InstagramIcon.tsx    # Símbolo oficial vetorial do Instagram
│       ├── ThemeAndAccessibilityProvider.tsx  # Context: tema, fonte, WhatsApp tracking
│       └── VLibrasWidget.tsx    # Widget de acessibilidade em Libras (VLibras Gov)
│
├── .env.example                 # Documentação das variáveis de ambiente
├── .gitignore                   # Arquivos ignorados pelo Git
├── next.config.ts               # Configuração Next.js + headers de segurança
├── tsconfig.json                # Configuração TypeScript
├── eslint.config.mjs            # Configuração ESLint
└── package.json                 # Dependências e scripts NPM
```

---

## Componentes

### `Header.tsx`
- Barra superior amarela com localização e controles de acessibilidade (VLibras, tamanho de fonte, tema)
- Navegação sticky com scroll-aware (muda visual ao rolar)
- Link oficial para o Instagram `@reforcoandrenascimento` com ícone no desktop e mobile
- Número de telefone com link direto para WhatsApp com mensagem pré-preenchida
- Menu mobile com animação e fechamento via `Escape`

### `Hero.tsx`
- Headline principal com destaque tipográfico e badge de slogan
- Badges de autoridade: Presencial/Fortaleza, Rede Reforço Brasil, +30 anos
- CTA primário verde → WhatsApp com mensagem pré-preenchida
- CTA secundário → ancora para seção de serviços
- Imagem hero com overlay de informação no rodapé da foto

### `StickyWhatsApp.tsx`
- Botão flutuante fixo no **canto inferior direito**
- Aparece com balão de ajuda após 4 segundos
- Indicador pulsante verde ("online")
- Exibe número `(85) 98536-3010` em telas `sm+`

### `Footer.tsx`
- Três colunas: Marca, Localização & Contato, Reconhecimento & Inclusão
- Botão oficial com gradiente e link para o Instagram `@reforcoandrenascimento`
- Linha de contato com o símbolo oficial do Instagram
- Telefone/WhatsApp com link e mensagem pré-preenchida
- Crédito "Desenvolvido por Gleice Avelino" com link para WhatsApp da desenvolvedora

### `ThemeAndAccessibilityProvider.tsx`
- Context global que provê: `theme`, `toggleTheme`, `fontSize`, controles de fonte, `whatsappUrl`, `trackWhatsAppClick`
- Persiste preferências de tema e fonte via `localStorage`
- Centraliza a URL do WhatsApp com mensagem padrão

---

## Pré-requisitos

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (ou yarn/pnpm)

---

## Instalação e Execução

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>
cd RAN-SITE

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com os valores reais

# 4. Inicie o servidor de desenvolvimento
npm run dev
# → http://localhost:3000

# 5. Build de produção
npm run build

# 6. Inicie em produção
npm start
```

---

## Variáveis de Ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta (Facebook) Pixel ID | `XXXXXXXXXXXXXXX` |
| `NEXT_PUBLIC_WHATSAPP_PHONE` | Número WhatsApp (sem + ou espaços) | `5585985363010` |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site | `https://reforcoandrenascimento.com.br` |

> ⚠️ **NUNCA** commite `.env.local` — ele já está no `.gitignore`.

---

## Segurança

O projeto implementa as seguintes camadas de segurança (configuradas em `next.config.ts` e `src/app/layout.tsx`):

### HTTP Headers (em todas as rotas)
| Header | Valor | Proteção |
|--------|-------|----------|
| `X-Frame-Options` | `SAMEORIGIN` | Anti-clickjacking |
| `X-Content-Type-Options` | `nosniff` | Anti-MIME sniffing |
| `X-XSS-Protection` | `1; mode=block` | XSS filter (browsers legados) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Privacidade de navegação |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` | Força HTTPS (HSTS) |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()...` | Desabilita APIs não usadas |
| `Content-Security-Policy` | Whitelist de fontes confiáveis | Anti-XSS / injeção |
| `X-Powered-By` | *(removido)* | Anti-fingerprinting |

### Segurança de Imagens
- SVGs externos desabilitados (`dangerouslyAllowSVG: false`)
- `remotePatterns` limita domínios de imagens remotas

### Arquivos de Segurança
- `public/robots.txt` — bloqueia crawlers de IA e scrapers maliciosos
- `public/.well-known/security.txt` — RFC 9116, ponto de contato para vulnerabilidades

---

## SEO & Acessibilidade

### SEO
- **Metadata API** do Next.js com title, description, keywords, OG e Twitter Card
- **JSON-LD Schema.org** — `EducationalOrganization` + `LocalBusiness`
- **Canonical URL** configurada
- **robots** — `index: true, follow: true`

### Acessibilidade (WCAG 2.2 AA)
- Skip link ("Pular para o conteúdo principal")
- Todos os elementos interativos com `aria-label`
- Contraste de cores verificado
- Suporte a navegação por teclado (`Tab`, `Escape`)
- Integração com **VLibras** (tradução em Libras)
- Controle de tamanho de fonte (pequeno / normal / grande / extra-grande)
- Alternância de tema claro/escuro sem flash (anti-FOUC script)

---

## Deploy

### Vercel (recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Outras plataformas
```bash
npm run build   # gera a pasta .next/
npm start       # serve em produção na porta 3000
```

> ✅ Os headers de segurança são aplicados automaticamente via `next.config.ts` em qualquer plataforma que suporte Next.js.

---

## Créditos

| Responsável | Papel | Contato |
|-------------|-------|---------|
| **André Nascimento** | Cliente / Proprietário | [WhatsApp (85) 98536-3010](https://wa.me/5585985363010) |
| **Gleice Avelino** | Desenvolvedora Front-end | [WhatsApp (85) 99437-8208](https://wa.me/5585994378208?text=Ol%C3%A1%20Gleice%2C%20vim%20pelo%20site%20do%20Acompanhamento%20Pedag%C3%B3gico%20Andr%C3%A9%20Nascimento%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!) |

---

*Última atualização: Outubro/2026*
