import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { monthSummaries } from '@/data/mockData';

export function MonthlyChart() {
  return (
    <div className="chart-card">
      <h2 className="chart-title">Receitas vs Despesas</h2>
      <p className="chart-sub">Últimos 6 meses</p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={monthSummaries} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff08" />
          <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{ background: '#1e2435', border: '1px solid #2a3150', borderRadius: 10, color: '#e2e8f0' }}
            formatter={(value: number) => [value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), '']}
          />
          <Legend
            wrapperStyle={{ fontSize: 13, color: '#94a3b8', paddingTop: 8 }}
            formatter={(value) => (value === 'income' ? 'Receita' : 'Despesa')}
          />
          <Bar dataKey="income" name="income" fill="#6366f1" radius={[6, 6, 0, 0]} />
          <Bar dataKey="expense" name="expense" fill="#ef4444" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
