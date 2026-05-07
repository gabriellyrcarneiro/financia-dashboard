import { TrendingUp, TrendingDown, Wallet, PiggyBank } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string;
  sub?: string;
  icon: React.ReactNode;
  accent: string;
  trend?: 'up' | 'down' | 'neutral';
}

function SummaryCard({ title, value, sub, icon, accent, trend }: SummaryCardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-label">{title}</span>
        <span className="card-icon" style={{ background: accent + '22', color: accent }}>
          {icon}
        </span>
      </div>
      <p className="card-value" style={{ color: accent }}>
        {value}
      </p>
      {sub && (
        <p className="card-sub">
          {trend === 'up' && <TrendingUp size={13} />}
          {trend === 'down' && <TrendingDown size={13} />}
          {sub}
        </p>
      )}
    </div>
  );
}

interface SummaryCardsProps {
  balance: number;
  totalIncome: number;
  totalExpenses: number;
  savingsRate: string;
}

const fmt = (n: number) =>
  n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export function SummaryCards({ balance, totalIncome, totalExpenses, savingsRate }: SummaryCardsProps) {
  return (
    <div className="cards-grid">
      <SummaryCard
        title="Saldo Atual"
        value={fmt(balance)}
        sub="Maio 2025"
        icon={<Wallet size={18} />}
        accent="#10b981"
        trend="neutral"
      />
      <SummaryCard
        title="Receitas"
        value={fmt(totalIncome)}
        sub="+12% vs mês anterior"
        icon={<TrendingUp size={18} />}
        accent="#6366f1"
        trend="up"
      />
      <SummaryCard
        title="Despesas"
        value={fmt(totalExpenses)}
        sub="-5% vs mês anterior"
        icon={<TrendingDown size={18} />}
        accent="#ef4444"
        trend="down"
      />
      <SummaryCard
        title="Taxa de Poupança"
        value={`${savingsRate}%`}
        sub="da receita total"
        icon={<PiggyBank size={18} />}
        accent="#f59e0b"
      />
    </div>
  );
}
