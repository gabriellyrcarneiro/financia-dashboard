import { LayoutDashboard, ArrowLeftRight, Target, Settings, LogOut } from 'lucide-react';

const navItems = [
  { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
  { icon: <ArrowLeftRight size={20} />, label: 'Transações' },
  { icon: <Target size={20} />, label: 'Metas' },
  { icon: <Settings size={20} />, label: 'Configurações' },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">₿</span>
        <span className="logo-text">FinDash</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button key={item.label} className={`nav-item ${item.active ? 'active' : ''}`}>
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <button className="nav-item logout">
        <LogOut size={20} />
        <span>Sair</span>
      </button>
    </aside>
  );
}
