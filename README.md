# 💰 FinDash — Dashboard Financeiro Pessoal

Dashboard financeiro moderno para controle de receitas, despesas, orçamentos e metas pessoais. Desenvolvido com React, TypeScript e Recharts.

![Preview](https://via.placeholder.com/900x500/131726/10b981?text=FinDash+Preview)

## ✨ Funcionalidades

- 📊 **Visão Geral** — Saldo, receitas, despesas e taxa de poupança em tempo real
- 📈 **Gráficos Interativos** — Comparativo mensal de receitas vs despesas (6 meses)
- 🍩 **Despesas por Categoria** — Gráfico de rosca com distribuição das categorias
- 💳 **Transações Recentes** — Lista das últimas movimentações financeiras
- 🎯 **Orçamentos** — Acompanhamento de limites por categoria com barra de progresso

## 🛠️ Stack Tecnológica

| Tecnologia      | Uso                          |
|-----------------|------------------------------|
| React 18        | Framework de UI              |
| TypeScript 5    | Tipagem estática             |
| Vite 5          | Build tool e dev server      |
| Recharts        | Gráficos (Bar, Pie)          |
| Lucide React    | Ícones SVG                   |
| date-fns        | Formatação de datas (pt-BR)  |

## 📁 Estrutura do Projeto

```
financial-dashboard/
├── src/
│   ├── components/
│   │   ├── cards/
│   │   │   └── SummaryCards.tsx    # Cards de saldo, receita, despesa, poupança
│   │   ├── charts/
│   │   │   ├── MonthlyChart.tsx    # Gráfico de barras mensal
│   │   │   └── CategoryChart.tsx   # Gráfico de rosca por categoria
│   │   ├── Header.tsx              # Topbar com busca e perfil
│   │   ├── Sidebar.tsx             # Menu lateral de navegação
│   │   ├── TransactionList.tsx     # Lista de transações recentes
│   │   └── BudgetProgress.tsx      # Barras de progresso de orçamento
│   ├── data/
│   │   └── mockData.ts             # Dados de exemplo (transações, orçamentos)
│   ├── hooks/
│   │   └── useFinance.ts           # Hook de cálculos financeiros
│   ├── types/
│   │   └── index.ts                # Interfaces TypeScript
│   ├── App.tsx                     # Componente raiz
│   ├── App.css                     # Estilos globais (design system)
│   └── main.tsx                    # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js instalado
- npm ou yarn

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/gabriellyrcarneiro/financia-dashboard.git
cd financia-dashboard

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no navegador.

### Scripts Disponíveis

```bash
npm run dev       # Servidor de desenvolvimento com hot reload
npm run build     # Build de produção (gera pasta /dist)
npm run preview   # Visualiza o build de produção localmente
npm run lint      # Verifica o código com ESLint
```

## 🏗️ Build para Produção

```bash
npm run build
```

## 🎨 Design System

O projeto usa um tema dark luxury com as seguintes variáveis CSS:

```css
--bg:       #0c0e17   /* Fundo principal */
--surface:  #131726   /* Cards e sidebar */
--border:   #232a42   /* Bordas sutis */
--green:    #10b981   /* Saldo / receita positiva */
--red:      #ef4444   /* Despesas */
--indigo:   #6366f1   /* Item ativo / destaque */
--amber:    #f59e0b   /* Alertas de orçamento */
```

Fontes: **Syne** (títulos) + **DM Mono** (números) + **DM Sans** (corpo)

## 📦 Próximos Passos / Roadmap

- [ ] Integração com backend / API REST
- [ ] Autenticação com JWT
- [ ] Persistência de dados com banco de dados
- [ ] Adicionar / editar / remover transações via formulário
- [ ] Filtros por período nas transações
- [ ] Modo claro (light theme)
- [ ] Exportar relatório em PDF
- [ ] Página de Metas financeiras
- [ ] Notificações de limite de orçamento

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
3. Commit suas mudanças: `git commit -m 'feat: adiciona nova funcionalidade'`
4. Push para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

 — Feito com ❤️ e TypeScript
