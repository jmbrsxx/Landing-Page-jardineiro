# Landing Page Jardineiro 🌿

Uma landing page moderna e responsiva para serviços de jardinagem, desenvolvida com as tecnologias mais atuais.

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construir interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultra-rápido
- **Tailwind CSS** - Framework CSS utility-first para estilização
- **React Router** - Roteamento para aplicações React
- **Shadcn/ui** - Componentes reutilizáveis de alta qualidade
- **Playwright** - Framework de testes e2e
- **Vitest** - Test runner rápido e moderno

## 📋 Pré-requisitos

- Node.js 16+ instalado
- npm, yarn, pnpm ou bun como gerenciador de pacotes

## 🏗️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/Landing-Page-jardineiro.git
cd Landing-Page-jardineiro
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

## 🎯 Scripts Disponíveis

### Desenvolvimento
```bash
npm run dev
```
Inicia o servidor de desenvolvimento em `http://localhost:5173`

### Build
```bash
npm run build
```
Cria uma versão otimizada para produção na pasta `dist`

### Preview
```bash
npm run preview
```
Preview local da build de produção

### Testes
```bash
npm run test
npm run test:ui
npm run test:coverage
```

### Linting
```bash
npm run lint
npm run lint:fix
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/            # Componentes UI reutilizáveis
│   ├── AboutSection.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── CTASection.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/             # Páginas da aplicação
├── hooks/             # Custom React hooks
├── assets/            # Imagens e mídia
├── lib/               # Funções utilitárias
├── App.tsx            # Componente raiz
└── main.tsx           # Ponto de entrada
```

## 🎨 Customização

### Cores e Temas
Edite o arquivo `tailwind.config.ts` para customizar as cores e estilos globais.

### Componentes UI
Os componentes estão localizados em `src/components/ui` e podem ser customizados conforme necessário.

## 🌐 Deploy

O projeto está configurado para ser facilmente deployado em:

- **Vercel** - `vercel deploy`
- **Netlify** - Conexão automática via GitHub
- **GitHub Pages** - Configure em `vite.config.ts`
- **AWS, Azure, etc** - Qualquer plataforma que suporte aplicações Node.js

## 📝 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.

## 👤 Autor

[Seu Nome/Empresa]

## 🤝 Contribuindo

Contribuições são bem-vindas! Abra uma issue ou pull request para sugerir melhorias.

---

**Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS**
