import { useState } from 'react';
import '../styles/sidebar.scss';
import sprite from '../assets/icons.svg';
import { MdChevronRight } from "react-icons/md";

const Menu = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'icon-dashboard' },
    { id: 'product', label: 'Product', icon: 'icon-product' },
    { id: 'customers', label: 'Customers', icon: 'icon-customers' },
    { id: 'income', label: 'Income', icon: 'icon-income' },
    { id: 'promote', label: 'Promote', icon: 'icon-promote' },
    { id: 'help', label: 'Help', icon: 'icon-help' },
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
              <svg className="sidebar-menu-icon">
                <use href={`${sprite}#${item.icon}`}></use>
              </svg>
              {item.label}
              <button className="sidebar-shevron-icon">
            <MdChevronRight className="icon" />
          </button>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
