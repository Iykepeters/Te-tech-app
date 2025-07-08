//sidebar.js
import { useState } from 'react';
import Nav from './navBar';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <h1 className="logo">NWACHIEF TE-TECH COMMUNICATIONS</h1>
      <button className="menu-btn" onClick={toggleSidebar}>☰</button>
      <Nav isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Sidebar