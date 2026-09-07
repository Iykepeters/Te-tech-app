import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './navBar';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo-link">
        <h1 className="logo">NWACHIEF TE-TECH COMMUNICATIONS</h1>
      </Link>
      <button className="menu-btn" onClick={toggleSidebar}>☰</button>
      <Nav isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Sidebar