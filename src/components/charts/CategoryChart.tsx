import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { categorySummaries } from '@/data/mockData';
import { categoryLabels } from '@/data/mockData';

export function CategoryChart() {
  return (
    <div className="chart-card">
      <h2 className="chart-title">Despesas por Categoria</h2>
      <p className="chart-sub">Maio 2025</p>
      <div className="donut-layout">
        <ResponsiveContainer width="50%" height={200}>
          <PieChart>
            <Pie
              data={categorySummaries}
              dataKey="amount"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={3}
            >
              {categorySummaries.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: '#1e2435', border: '1px solid #2a3150', borderRadius: 10, color: '#e2e8f0' }}
              formatter={(value: number, _name, props) => [
                value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
                categoryLabels[props.payload.category] ?? props.payload.category,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
        <ul className="donut-legend">
          {categorySummaries.map((item, i) => (
            <li key={i} className="legend-item">
              <span className="legend-dot" style={{ background: item.color }} />
              <span className="legend-label">{categoryLabels[item.category]}</span>
              <span className="legend-value">
                {item.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
