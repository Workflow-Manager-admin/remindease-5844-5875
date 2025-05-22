import React from 'react';
import './ReminderItem.css';

// PUBLIC_INTERFACE
/**
 * ReminderItem component - Displays a single reminder with skeuomorphic design
 * 
 * @param {object} props - Component props
 * @param {string} props.title - Title of the reminder
 * @param {string} props.category - Category of the reminder
 * @param {string} props.date - Due date of the reminder
 * @param {boolean} props.completed - Whether the reminder is completed
 * @param {function} props.onToggle - Function to toggle completion status
 * @param {string} props.categoryColor - Color associated with the category
 * @returns {React.ReactNode} - Rendered ReminderItem component
 */
const ReminderItem = ({ 
  title, 
  category, 
  date, 
  completed = false, 
  onToggle = () => {},
  categoryColor = '#4A90E2'
}) => {
  return (
    <div className={`reminder-item ${completed ? 'completed' : ''}`}>
      <div className="reminder-checkbox-container" onClick={onToggle}>
        <div className="reminder-checkbox">
          {completed && <span className="reminder-check">✓</span>}
        </div>
      </div>

      <div className="reminder-content">
        <div className="reminder-title-row">
          <h3 className="reminder-title">{title}</h3>
          <div className="reminder-date">{date}</div>
        </div>
        
        <div className="reminder-category">
          <span className="reminder-category-color" style={{ backgroundColor: categoryColor }}></span>
          <span className="reminder-category-text">{category}</span>
        </div>
      </div>
    </div>
  );
};

export default ReminderItem;
