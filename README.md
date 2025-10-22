# Feriscan - Simulador de Análise de Feridas

![Feriscan Logo](https://img.shields.io/badge/Feriscan-PoC-ed1a3b?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📋 Sobre o Projeto

Aplicativo web interativo (Prova de Conceito) que simula o funcionamento da **Caneta Feriscan**, um dispositivo conceitual de alta tecnologia para análise de feridas desenvolvido pela Feriscan Healthtech Ltda.

O sistema simula todo o processo de leitura e análise de feridas, apresentando resultados detalhados de forma animada e interativa em tela cheia.

## ✨ Funcionalidades

### 🎯 Tela Inicial
- Apresentação da marca Feriscan
- Animações de partículas flutuantes
- Cards informativos sobre as capacidades do sistema
- Botão de início com efeitos visuais

### 🔬 Simulação de Escaneamento
- Animação de dispositivo com anéis pulsantes
- Efeito de laser vertical animado
- Barra de progresso em tempo real (0-100%)
- Indicadores de parâmetros sendo capturados
- Transição automática para resultados

### 📊 Dashboard de Resultados
- **Resumo da Análise**: Nível de risco e recomendações
- **Dimensões da Ferida**: Comprimento, largura, profundidade e área (com contadores animados)
- **Tipo de Tecido**: Gráfico circular animado mostrando percentuais
- **Exsudato**: Volume, consistência e cor
- **Bordas da Ferida**: Estado, maceração e sinais de infecção
- **Pele Perilesional**: Estado, coloração e temperatura
- **Temperatura da Pele**: Display grande com animação
- **pH da Ferida**: Medição com indicador visual
- **Relatório**: Timestamp e informações de geração

## 🎨 Design

### Paleta de Cores
- **Fundo**: `#111822` (azul escuro)
- **Texto**: `#ffffff` (branco)
- **Destaque**: `#ed1a3b` (vermelho Feriscan)

### Características Visuais
- Tema escuro profissional
- Glassmorphism em cards
- Animações suaves com Framer Motion
- Gradientes e efeitos de brilho
- Tipografia clara e hierarquizada
- Responsivo para diferentes resoluções

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS 4** - Framework CSS
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **Wouter** - Roteamento
- **shadcn/ui** - Componentes UI

## 🚀 Como Executar

### Pré-requisitos
- Node.js 22+
- pnpm 10+

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview da build
pnpm preview
```

### Acesso
Após iniciar o servidor de desenvolvimento, acesse:
```
http://localhost:3000
```

## 📱 Modo Tela Cheia

Para melhor experiência, recomenda-se usar o modo tela cheia:
- **Chrome/Edge**: Pressione `F11`
- **Firefox**: Pressione `F11`
- **Safari**: Pressione `Cmd+Ctrl+F`

## 🎭 Fluxo de Navegação

```
┌─────────────────┐
│  Tela Inicial   │
│   (IntroScreen) │
└────────┬────────┘
         │ Clique em "Iniciar Análise"
         ▼
┌─────────────────┐
│  Escaneamento   │
│ (ScanningSimul.)│
└────────┬────────┘
         │ Progresso automático (5s)
         ▼
┌─────────────────┐
│   Resultados    │
│(ResultsDashboard)│
└────────┬────────┘
         │ Botão "Nova Análise"
         ▼
    (volta ao início)
```

## 📊 Dados Simulados

Os dados apresentados são mockados e representam uma análise típica:

```typescript
{
  dimensoes: {
    comprimento: 4.5 cm,
    largura: 3.2 cm,
    profundidade: 0.8 cm,
    area: 14.4 cm²
  },
  tecido: {
    tipo: "Granulação" (70%),
    secundario: "Necrótico" (30%)
  },
  exsudato: {
    volume: "Moderado",
    consistencia: "Seroso",
    cor: "Amarelo claro"
  },
  temperatura: 34.2°C,
  ph: 6.8,
  risco: "Baixo"
}
```

## 🎬 Animações Implementadas

- **Fade in/out** - Transições entre telas
- **Scale animations** - Elementos de destaque
- **Pulse effects** - Indicadores ativos
- **Progress bars** - Barras animadas
- **Circular charts** - Gráficos com animação de desenho
- **Counter animations** - Contadores numéricos incrementais
- **Particle effects** - Partículas flutuantes na intro
- **Laser scanning** - Linha vertical animada
- **Stagger animations** - Cards aparecendo em sequência

## 📁 Estrutura do Projeto

```
client/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes shadcn/ui
│   │   ├── AnimatedCounter.tsx
│   │   └── TissueChart.tsx
│   ├── pages/
│   │   ├── IntroScreen.tsx
│   │   ├── ScanningSimulation.tsx
│   │   └── ResultsDashboard.tsx
│   ├── lib/
│   │   └── mockData.ts      # Dados simulados
│   ├── App.tsx              # Rotas
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais
└── public/                  # Assets estáticos
```

## 🎯 Objetivos do PoC

Este simulador foi desenvolvido para demonstrar:

1. **Viabilidade técnica** da interface do sistema Feriscan
2. **Experiência do usuário** no processo de análise
3. **Apresentação de dados** clínicos de forma clara e profissional
4. **Capacidades visuais** para apresentações e demonstrações

## 👥 Equipe Feriscan Healthtech

- Amanda Portela Torres Xavier — RGM 31454488
- Ana Carla Vanzelli — RGM 30421675
- Estevão Gabriel Bozzo da Silva — RGM 30018111
- Fernanda Vaniete de Souza Pinheiro — RGM 30039452
- Gabriel Lima Alves — RGM 40705854
- Isabel Cristina da Silva Barros — RGM 5829728215
- Jhonatan Ribeiro Ferreira — RGM 31494358
- Juliana Yuka Barbosa Taniguti — RGM 29930430
- Nicolly Sophia Dardis — RGM 30220084
- Pedro Henrique Santos Gregorutti — RGM 30150876

## 📄 Licença

Este é um projeto acadêmico desenvolvido como Prova de Conceito para a Feriscan Healthtech Ltda.

---

**Feriscan** - A evolução no cuidado de feridas | Precisão à sua mão

