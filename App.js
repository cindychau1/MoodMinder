import React, { useState } from 'react';
import Mood from './Mood';
import './styles.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Journal from './Journal';

function App() {
  const [selectedDate, setSeletedDate] = useState(new Date());
  return (
    <div className='app'>
      <div className='moodContainer'>
        <div className='dateContainer'>
          <h1>Today's Date: </h1>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSeletedDate(date)}
          />
        </div>
        <h2>How are you feeling today?</h2>
        <div style={{ width: 600 }}>
          <Mood date={selectedDate} />
        </div>
      </div>
      <div className='journalContainer'>
        <h2>Write out your thoughts: </h2>
        <Journal date={selectedDate} />
      </div>
    </div>
  );
}

export default App;
