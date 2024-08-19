import { useState } from "react";
import "../styles/sidebar.scss";
import Menu from "./Menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import sprite from "../assets/icons.svg";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <RxHamburgerMenu />}
      </button>

      <aside className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <svg className="sidebar-header-icon">
            <use href={`${sprite}#icon-setting-1`}></use>
          </svg>
          <h1 className="sidebar-header-title">
            Dashboard<span className="sidebar-header-title-span">v.01</span>
          </h1>
        </div>
        <Menu />
        <div className="sidebar-manager">
          <img
            src="/crm_dashboard_test/images/manager_photo.png"
            alt="Manager avatar"
          />
          <div className="sidebar-manager-info">
            <h3>Evano</h3>
            <p>Project Manager</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
