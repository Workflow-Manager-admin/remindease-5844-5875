import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './MainContainer.css';

// PUBLIC_INTERFACE
/**
 * MainContainer component - The primary container for the RemindEase application
 * with skeuomorphic design and theme support
 * 
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render inside the container
 * @param {string} [props.className] - Additional CSS class names
 * @returns {React.ReactNode} - Rendered MainContainer component
 */
const MainContainer = ({ children, className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`main-container ${className}`}>
      <header className="main-container-header">
        <div className="brand">
          <div className="logo-container">
            <span className="logo-icon">⏰</span>
            <h1 className="logo-text">RemindEase</h1>
          </div>
          
          <div className="theme-toggle" data-theme={theme} onClick={toggleTheme}>
            <span className="theme-toggle-handle">
              {theme === 'light' ? '☀️' : '🌙'}
            </span>
          </div>
        </div>
      </header>

      <div className="main-content-wrapper">
        <div className="sidebar">
          <nav className="nav-menu">
            <ul>
              <li className="nav-item active">
                <button className="nav-button">
                  <span className="nav-icon">📋</span>
                  <span className="nav-text">All Reminders</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-button">
                  <span className="nav-icon">⭐</span>
                  <span className="nav-text">Important</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-button">
                  <span className="nav-icon">📅</span>
                  <span className="nav-text">Today</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-button">
                  <span className="nav-icon">🔜</span>
                  <span className="nav-text">Upcoming</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-button">
                  <span className="nav-icon">✅</span>
                  <span className="nav-text">Completed</span>
                </button>
              </li>
            </ul>
          </nav>
          
          <div className="categories-section">
            <h3 className="sidebar-heading">Categories</h3>
            <ul>
              <li className="category-item">
                <span className="category-color" style={{ backgroundColor: '#4A90E2' }}></span>
                <span className="category-text">Personal</span>
              </li>
              <li className="category-item">
                <span className="category-color" style={{ backgroundColor: '#50E3C2' }}></span>
                <span className="category-text">Work</span>
              </li>
              <li className="category-item">
                <span className="category-color" style={{ backgroundColor: '#E35050' }}></span>
                <span className="category-text">Urgent</span>
              </li>
            </ul>
          </div>
        </div>

        <main className="main-content">
          <div className="main-content-inner">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainContainer;
