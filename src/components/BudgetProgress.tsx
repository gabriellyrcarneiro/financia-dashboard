import { budgets } from '@/data/mockData';
import { categoryLabels } from '@/data/mockData';

export function BudgetProgress() {
  return (
    <div className="chart-card">
      <h2 className="chart-title">Orçamentos</h2>
      <p className="chart-sub">Progresso mensal</p>
      <ul className="budget-list">
        {budgets.map((b) => {
          const pct = Math.min((b.spent / b.limit) * 100, 100);
          const over = b.spent > b.limit;
          return (
            <li key={b.category} className="budget-item">
              <div className="budget-header">
                <span className="budget-label">{categoryLabels[b.category]}</span>
                <span className={`budget-values ${over ? 'over' : ''}`}>
                  {b.spent.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  {' / '}
                  {b.limit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
              </div>
              <div className="budget-bar-bg">
                <div
                  className={`budget-bar-fill ${over ? 'over' : pct > 80 ? 'warn' : 'ok'}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
