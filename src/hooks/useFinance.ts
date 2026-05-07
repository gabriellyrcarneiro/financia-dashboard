import { useMemo } from 'react';
import { transactions } from '@/data/mockData';
import { Transaction } from '@/types';

export function useFinance() {
  const totalIncome = useMemo(
    () => transactions.filter((t) => t.type === 'income').reduce((sum, t) => sum + t.amount, 0),
    []
  );

  const totalExpenses = useMemo(
    () => transactions.filter((t) => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0),
    []
  );

  const balance = useMemo(() => totalIncome - totalExpenses, [totalIncome, totalExpenses]);

  const savingsRate = useMemo(
    () => (totalIncome > 0 ? ((balance / totalIncome) * 100).toFixed(1) : '0'),
    [balance, totalIncome]
  );

  const recentTransactions: Transaction[] = useMemo(
    () => [...transactions].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 8),
    []
  );

  return { totalIncome, totalExpenses, balance, savingsRate, recentTransactions };
}
