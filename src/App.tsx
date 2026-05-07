import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { SummaryCards } from '@/components/cards/SummaryCards';
import { MonthlyChart } from '@/components/charts/MonthlyChart';
import { CategoryChart } from '@/components/charts/CategoryChart';
import { TransactionList } from '@/components/TransactionList';
import { BudgetProgress } from '@/components/BudgetProgress';
import { useFinance } from '@/hooks/useFinance';
import './App.css';

function App() {
  const { balance, totalIncome, totalExpenses, savingsRate, recentTransactions } = useFinance();

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="dashboard">
          <SummaryCards
            balance={balance}
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            savingsRate={savingsRate}
          />
          <div className="charts-row">
            <MonthlyChart />
            <CategoryChart />
          </div>
          <div className="bottom-row">
            <TransactionList transactions={recentTransactions} />
            <BudgetProgress />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
