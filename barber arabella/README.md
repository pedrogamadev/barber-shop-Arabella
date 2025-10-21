# As’ Arabella .Dev — Landing Page

Landing page conceito construída com React + Vite (TypeScript) para a barbearia fictícia **As’ Arabella .Dev**. O projeto destaca uma experiência premium com navegação fluida, agenda online e seções personalizadas para apresentar a marca a potenciais clientes.

## Tecnologias

- [React 19](https://react.dev/) com [Vite](https://vite.dev/) e TypeScript (SWC)
- [Twind](https://twind.style/) para utilitários de estilo com filosofia Tailwind
- Layout responsivo com componentes modulares e assets personalizados

## Pré-requisitos

- Node.js 18 ou superior
- npm 10 (o arquivo `.npmrc` já habilita o modo `legacy-peer-deps` para compatibilidade com o Twind)

## Como rodar

```bash
# Instalar dependências
npm install

# Ambiente de desenvolvimento
npm run dev

# Build de produção
npm run build

# Pré-visualizar a build
npm run preview
```

## Estrutura de pastas

```
src/
  assets/           # Imagens conceituais utilizadas na landing page
  components/       # Componentes por seção (Hero, Serviços, Equipe, etc.)
  App.tsx           # Montagem da página principal
  index.css         # Estilos globais e fontes
  main.tsx          # Entrada da aplicação com o provedor do Twind
```

## Deploy na Vercel

1. Faça fork/clonagem deste repositório e conecte-o à Vercel.
2. Defina o comando de build padrão (`npm run build`) e a pasta de saída `dist`.
3. As variáveis de ambiente não são necessárias neste protótipo.

## Personalização

- Substitua as imagens em `src/assets` por fotos reais da barbearia.
- Ajuste textos, preços e depoimentos diretamente nos componentes correspondentes.
- Integre o formulário de agendamento a um backend ou serviço de terceiros quando estiver pronto para produção.

## Licença

Distribuído sob a licença MIT. Consulte o arquivo [LICENSE](../LICENSE) para mais detalhes.
