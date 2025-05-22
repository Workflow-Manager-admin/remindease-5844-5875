import React, { useState } from 'react';
import './ReminderForm.css';

// PUBLIC_INTERFACE
/**
 * ReminderForm component - Modal form for creating or editing reminders
 * 
 * @param {object} props - Component props
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {function} props.onClose - Function to close the modal
 * @param {function} props.onSave - Function to save the reminder
 * @returns {React.ReactNode} - Rendered ReminderForm component or null if closed
 */
const ReminderForm = ({ isOpen, onClose, onSave }) => {
  const initialState = {
    title: '',
    category: 'Personal',
    date: '',
    categoryColor: '#4A90E2',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  // Available categories and colors
  const categories = ['Personal', 'Work', 'Urgent'];
  const colors = {
    'Personal': '#4A90E2',
    'Work': '#50E3C2', 
    'Urgent': '#E35050',
    'Custom': '#FFA500'
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }

    // Update color when category changes
    if (name === 'category' && colors[value]) {
      setFormData(prev => ({
        ...prev,
        categoryColor: colors[value]
      }));
    }
  };

  // Handle color selection
  const handleColorSelect = (color) => {
    setFormData({
      ...formData,
      categoryColor: color
    });
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.date.trim()) {
      newErrors.date = 'Date is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSave(formData);
      setFormData(initialState);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="reminder-form-overlay" onClick={onClose}>
      <div className="reminder-form" onClick={(e) => e.stopPropagation()}>
        <div className="form-header">
          <h2 className="form-title">Create New Reminder</h2>
          <button className="form-close" onClick={onClose}>✖</button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-input"
              placeholder="What do you need to remember?"
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && <div className="error-message">{errors.title}</div>}
          </div>
          
          <div className="form-group">
            <label htmlFor="category" className="form-label">Category</label>
            <select
              id="category"
              name="category"
              className="form-select"
              value={formData.category}
              onChange={handleChange}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Color</label>
            <div className="color-options">
              {Object.entries(colors).map(([name, color]) => (
                <div
                  key={color}
                  className={`color-option ${formData.categoryColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorSelect(color)}
                  title={name}
                />
              ))}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="date" className="form-label">Date & Time</label>
            <input
              type="text"
              id="date"
              name="date"
              className="form-input"
              placeholder="e.g., Today, 6:00 PM"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <div className="error-message">{errors.date}</div>}
          </div>
          
          <div className="form-divider"></div>
          
          <div className="form-actions">
            <button 
              type="button" 
              className="btn btn-cancel" 
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn"
            >
              Save Reminder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReminderForm;
