import "../styles/sidebar.scss";
import Menu from "./Menu";
import sprite from "../assets/icons.svg";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <svg className="sidebar-header-icon">
          <use href={`${sprite}#icon-setting-1`}></use>
        </svg>
        <h1 className="sidebar-header-title">
          Dashboard<span className="sidebar-header-title-span">v.01</span>
        </h1>
      </div>
      <Menu />
    </aside>
  );
};

export default Sidebar;
