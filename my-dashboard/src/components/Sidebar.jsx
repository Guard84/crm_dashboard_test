import '../styles/sidebar.scss';
import Menu from './Menu';

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <h1 className='sidebar-header'>Dashboard<span className='sidebar-header-span'>v.01</span></h1>
      <Menu/>
    </aside>
  );
};

export default Sidebar;
