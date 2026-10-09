# Changelog

Todas as mudanças notáveis deste projeto serão documentadas aqui.  
Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [Não lançado]

### Planejado
- Sitemap dinâmico (`/sitemap.xml`) via Next.js Route Handler
- Página de Política de Segurança (`/security-policy`)
- Ativação do Google Analytics 4 e Meta Pixel com IDs reais
- Submissão do domínio à HSTS Preload List

---

## [0.5.0] — 2026-10-09

### Adicionado 📸
- Integração oficial com Instagram (`@reforcoandrenascimento` → `https://www.instagram.com/reforcoandrenascimento/`):
  - Criado componente `InstagramIcon` com vetor oficial e suporte a variantes preenchida e contorno
  - Adicionado link no cabeçalho desktop com ícone oficial
  - Adicionado link no menu móvel com ícone oficial
  - Adicionado botão de destaque no rodapé (gradiente oficial do Instagram) e item na lista de contatos do rodapé
  - Parâmetros `target="_blank"` e `rel="noopener noreferrer"` aplicados para segurança contra tabnabbing
- **Identidade Visual & Favicon na aba do navegador**:
  - Imagem oficial da marca RAN (bolso com materiais escolares e anel gradiente) configurada como ícone da aba (`favicon.ico`, `icon.png`, `apple-icon.png`)
  - Configurado objeto `icons` na metadata do Next.js App Router em `src/app/layout.tsx`

---

### Segurança 🔐
- Adicionados **HTTP Security Headers** completos via `next.config.ts`:
  - `Content-Security-Policy` (whitelist de scripts, estilos, fontes e conexões)
  - `Strict-Transport-Security` (HSTS — força HTTPS por 1 ano + preload)
  - `X-Frame-Options: SAMEORIGIN` (anti-clickjacking)
  - `X-Content-Type-Options: nosniff` (anti-MIME sniffing)
  - `X-XSS-Protection: 1; mode=block` (XSS filter legado)
  - `Referrer-Policy: strict-origin-when-cross-origin` (privacidade)
  - `Permissions-Policy` (desabilita câmera, microfone, geolocalização, USB, pagamentos)
- Removido header `X-Powered-By` (anti-fingerprinting)
- Segurança de imagens: `dangerouslyAllowSVG: false` + `remotePatterns` restritivo
- Adicionadas **meta tags de segurança** no `layout.tsx`:
  - `format-detection: none`
  - `X-UA-Compatible: IE=edge`
  - `upgrade-insecure-requests` (fallback CSP)
- Criado `public/robots.txt` bloqueando crawlers de IA (GPTBot, Claude, CCBot, Anthropic) e scrapers (Ahrefs, Semrush, MJ12bot)
- Criado `public/.well-known/security.txt` (RFC 9116)
- Criado `.env.example` documentando todas as variáveis sensíveis
- Atualizado `.gitignore` com extensões de certificados e chaves (`.key`, `.cert`, `.crt`, `.p12`, `.pfx`)

### Documentação 📝
- `README.md` completamente reescrito com arquitetura, componentes, segurança, SEO, acessibilidade, deploy e créditos
- Criado `CHANGELOG.md` com histórico de versões

---

## [0.3.0] — 2026-10-09

### Alterado
- **WhatsApp links**: todos os links do número `(85) 98536-3010` agora abrem com mensagem pré-preenchida:
  > "Olá! Vim pelo site do Acompanhamento Pedagógico André Nascimento e gostaria de mais informações!"
  - `Header.tsx` — número no topo da navegação
  - `Hero.tsx` — botão CTA principal
  - `Footer.tsx` — número na coluna de contato
  - `StickyWhatsApp.tsx` — botão flutuante (já usava mensagem via provider)

### Adicionado
- Crédito "**Desenvolvido por Gleice Avelino**" no Footer agora é um link clicável para WhatsApp `(85) 99437-8208` com mensagem pré-preenchida:
  > "Olá Gleice, vim pelo site do Acompanhamento Pedagógico André Nascimento e gostaria de mais informações!"

---

## [0.2.0] — 2026-10-09

### Alterado
- **Hero.tsx**: removido botão inline "Falar pelo WhatsApp (85) 98536-3010" que estava duplicado
- **Hero.tsx**: reorganizado bloco de CTAs com botão verde primário de WhatsApp + botão secundário "Ver Metodologia & Horários"
- **StickyWhatsApp.tsx**: atualizado texto do botão flutuante para exibir `WhatsApp (85) 98536-3010` em telas `sm+`
- **Footer.tsx**: número de telefone convertido de `<span>` para `<a>` com link WhatsApp
- **Header.tsx**: número de telefone convertido de âncora `#hero` para link WhatsApp externo

### Removido
- Import `MessageCircle` do `Hero.tsx` (ícone não mais utilizado após remoção do botão inline)

---

## [0.1.1] — 2026-10-08

### Adicionado
- Fontes `Plus_Jakarta_Sans` e `Kalam` carregadas via `next/font/google`
- Variáveis CSS `--font-sans` e `--font-handwriting` aplicadas no `<html>`
- Seleção de texto com cores da marca (`selection:bg-amber-400 selection:text-slate-950`)

### Alterado
- Metadata: renomeado de "Reforço André Nascimento (RAN)" para "Acompanhamento Pedagógico André Nascimento" em todos os campos (title, OG, Twitter, Schema.org)
- Schema.org: `alternateName` atualizado para "Reforço André Nascimento (RAN)"
- Keywords: adicionado "acompanhamento pedagógico andré nascimento"

---

## [0.1.0] — 2026-10-08

### Lançado
- Projeto inicial criado com `create-next-app` + Next.js 16.4.0 (Turbopack)
- Componentes base implementados:
  - `Header` com barra de acessibilidade, navegação sticky, menu mobile
  - `Hero` com headline, badges de autoridade e CTA WhatsApp
  - `Services` com cards de serviços oferecidos
  - `AboutTeachers` com apresentação das professoras fundadoras
  - `GalleryAndSocialProof` com galeria e depoimentos
  - `FaqSection` com accordion de perguntas frequentes
  - `Footer` com três colunas e créditos
  - `StickyWhatsApp` com botão flutuante e balão de ajuda
  - `BrandLogo` com variantes de tamanho e tema
  - `ThemeAndAccessibilityProvider` com context de tema, fonte e WhatsApp
  - `VLibrasWidget` para acessibilidade em Libras
- SEO: Metadata API completa com Open Graph, Twitter Card e JSON-LD Schema.org
- Acessibilidade: Skip link, aria-labels, WCAG 2.2 AA, VLibras, controle de fonte, tema dark/light com anti-FOUC
- Scripts prontos para Google Analytics 4 e Meta Pixel (aguardando IDs)
