import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import MainContainer from './components/MainContainer/MainContainer';
import ReminderItem from './components/ReminderItem/ReminderItem';

function App() {
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

  return (
    <ThemeProvider>
      <MainContainer>
        <div className="reminders-container">
          <div className="section-header">
            <h2 className="section-title">My Reminders</h2>
            <button className="btn">+ New Reminder</button>
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
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
