import { useState } from 'react';
import '../styles/sidebar.scss';

const Menu = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'product', label: 'Product' },
    { id: 'customers', label: 'Customers' },
    { id: 'income', label: 'Income' },
    { id: 'promote', label: 'Promote' },
    { id: 'help', label: 'Help' },
  ];

  return (
      <nav className="sidebar-menu">
        <ul>
          {menuItems.map(item => (
            <li
              key={item.id}
              className="sidebar-menu-item"
            >
              <a
                href="#"
                className={activeItem === item.id ? 'active' : ''}
                onClick={() => setActiveItem(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
  );
};

export default Menu;