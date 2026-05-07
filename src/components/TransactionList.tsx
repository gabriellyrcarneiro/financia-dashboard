import { Transaction } from '@/types';
import { categoryLabels } from '@/data/mockData';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="chart-card">
      <h2 className="chart-title">Transações Recentes</h2>
      <p className="chart-sub">Últimas movimentações</p>
      <ul className="tx-list">
        {transactions.map((tx) => (
          <li key={tx.id} className="tx-item">
            <span className={`tx-icon ${tx.type}`}>
              {tx.type === 'income' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
            </span>
            <div className="tx-info">
              <span className="tx-title">{tx.title}</span>
              <span className="tx-cat">{categoryLabels[tx.category]}</span>
            </div>
            <div className="tx-right">
              <span className={`tx-amount ${tx.type}`}>
                {tx.type === 'income' ? '+' : '-'}
                {tx.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
              <span className="tx-date">
                {format(new Date(tx.date), "dd MMM", { locale: ptBR })}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
