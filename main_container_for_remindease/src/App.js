import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import MainContainer from './components/MainContainer/MainContainer';
import ReminderItem from './components/ReminderItem/ReminderItem';
import ReminderForm from './components/ReminderForm/ReminderForm';

function App() {
  // State for modal visibility
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Sample reminders data
  const [reminders, setReminders] = useState([
    {
      id: 1,
      title: 'Finish React Project',
      category: 'Work',
      date: 'Today, 6:00 PM',
      completed: false,
      categoryColor: '#50E3C2'
    },
    {
      id: 2,
      title: 'Call Mom',
      category: 'Personal',
      date: 'Tomorrow, 10:00 AM',
      completed: false,
      categoryColor: '#4A90E2'
    },
    {
      id: 3,
      title: 'Pay Electric Bill',
      category: 'Urgent',
      date: 'Friday, 12:00 PM',
      completed: true,
      categoryColor: '#E35050'
    }
  ]);

  // Toggle reminder completion status
  const toggleReminderStatus = (id) => {
    setReminders(prevReminders => 
      prevReminders.map(reminder => 
        reminder.id === id 
          ? { ...reminder, completed: !reminder.completed } 
          : reminder
      )
    );
  };

  // Generate a new unique ID for reminders
  const generateId = () => {
    const maxId = reminders.length > 0
      ? Math.max(...reminders.map(r => r.id))
      : 0;
    return maxId + 1;
  };

  // Add a new reminder
  const addReminder = (reminderData) => {
    const newReminder = {
      id: generateId(),
      title: reminderData.title,
      category: reminderData.category,
      date: reminderData.date,
      completed: false,
      categoryColor: reminderData.categoryColor
    };
    
    setReminders(prevReminders => [...prevReminders, newReminder]);
  };

  // Open/close form handlers
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <ThemeProvider>
      <MainContainer>
        <div className="reminders-container">
          <div className="section-header">
            <h2 className="section-title">My Reminders</h2>
            <button className="btn" onClick={openForm}>+ New Reminder</button>
          </div>
          
          <div className="reminders-list">
            {reminders.map(reminder => (
              <ReminderItem
                key={reminder.id}
                title={reminder.title}
                category={reminder.category}
                date={reminder.date}
                completed={reminder.completed}
                categoryColor={reminder.categoryColor}
                onToggle={() => toggleReminderStatus(reminder.id)}
              />
            ))}
          </div>
        </div>
        
        {/* Reminder Form Modal */}
        <ReminderForm 
          isOpen={isFormOpen}
          onClose={closeForm}
          onSave={addReminder}
        />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
