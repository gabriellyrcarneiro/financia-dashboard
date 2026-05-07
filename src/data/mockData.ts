import { Transaction, Budget, MonthSummary, CategorySummary } from '@/types';

export const transactions: Transaction[] = [
  { id: '1', title: 'Salário', amount: 5800, type: 'income', category: 'salary', date: '2025-05-01' },
  { id: '2', title: 'Projeto Freelance', amount: 1200, type: 'income', category: 'freelance', date: '2025-05-03' },
  { id: '3', title: 'Aluguel', amount: 1400, type: 'expense', category: 'housing', date: '2025-05-05' },
  { id: '4', title: 'Supermercado', amount: 380, type: 'expense', category: 'food', date: '2025-05-06' },
  { id: '5', title: 'Uber', amount: 45, type: 'expense', category: 'transport', date: '2025-05-07' },
  { id: '6', title: 'Netflix', amount: 39.9, type: 'expense', category: 'entertainment', date: '2025-05-08' },
  { id: '7', title: 'Consulta Médica', amount: 250, type: 'expense', category: 'health', date: '2025-05-09' },
  { id: '8', title: 'Dividendos', amount: 340, type: 'income', category: 'investment', date: '2025-05-10' },
  { id: '9', title: 'Restaurante', amount: 120, type: 'expense', category: 'food', date: '2025-05-11' },
  { id: '10', title: 'Curso Online', amount: 199, type: 'expense', category: 'education', date: '2025-05-12' },
  { id: '11', title: 'Shopping', amount: 450, type: 'expense', category: 'shopping', date: '2025-05-13' },
  { id: '12', title: 'Gasolina', amount: 200, type: 'expense', category: 'transport', date: '2025-05-14' },
];

export const budgets: Budget[] = [
  { category: 'food', limit: 600, spent: 500 },
  { category: 'transport', limit: 300, spent: 245 },
  { category: 'housing', limit: 1500, spent: 1400 },
  { category: 'entertainment', limit: 200, spent: 39.9 },
  { category: 'health', limit: 400, spent: 250 },
  { category: 'shopping', limit: 400, spent: 450 },
];

export const monthSummaries: MonthSummary[] = [
  { month: 'Dez', income: 6200, expense: 3100 },
  { month: 'Jan', income: 5900, expense: 3400 },
  { month: 'Fev', income: 6100, expense: 2900 },
  { month: 'Mar', income: 7200, expense: 3600 },
  { month: 'Abr', income: 5800, expense: 3200 },
  { month: 'Mai', income: 7340, expense: 3083.9 },
];

export const categorySummaries: CategorySummary[] = [
  { category: 'housing', amount: 1400, color: '#6366f1' },
  { category: 'food', amount: 500, color: '#10b981' },
  { category: 'transport', amount: 245, color: '#f59e0b' },
  { category: 'shopping', amount: 450, color: '#ef4444' },
  { category: 'health', amount: 250, color: '#3b82f6' },
  { category: 'entertainment', amount: 39.9, color: '#8b5cf6' },
  { category: 'education', amount: 199, color: '#14b8a6' },
];

export const categoryLabels: Record<string, string> = {
  salary: 'Salário',
  freelance: 'Freelance',
  investment: 'Investimentos',
  food: 'Alimentação',
  transport: 'Transporte',
  housing: 'Moradia',
  health: 'Saúde',
  entertainment: 'Lazer',
  education: 'Educação',
  shopping: 'Compras',
  other: 'Outros',
};
