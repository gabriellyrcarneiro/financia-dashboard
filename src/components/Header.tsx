import { Bell, Search } from 'lucide-react';

export function Header() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <header className="topbar">
      <div>
        <h1 className="topbar-title">Visão Geral</h1>
        <p className="topbar-date">{dateStr}</p>
      </div>
      <div className="topbar-actions">
        <div className="search-bar">
          <Search size={15} />
          <input type="text" placeholder="Buscar transação..." />
        </div>
        <button className="icon-btn">
          <Bell size={18} />
        </button>
        <div className="avatar">JP</div>
      </div>
    </header>
  );
}
