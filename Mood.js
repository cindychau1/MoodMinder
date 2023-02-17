import React, { useState } from 'react';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LineChart from './components/LineChart';

function Mood({ date }) {
  const moodData = {
    newDate: date,
  };
  // declare initial mood states
  const category = ['verySad', 'sad', 'neutral', 'happy', 'veryHappy'];
  const [selected, setSelected] = useState('');
  const act = ['save', 'delete', 'view'];
  const [selectedAct, setSelectedAct] = useState('');
  const [moodList, setMoodList] = useState(moodList);

  // when mood button is clicked, set "selected" to the mood value
  const handleClick = (value) => setSelected(value);
  const handleAction = (value) => setSelectedAct(value);

  // when save button is clicked, store "selected" value inside moodData obj and send it to backend
  const handleSave = (selected) => {
    const moodRatings = {
      verySad: 1,
      sad: 2,
      neutral: 3,
      happy: 4,
      veryHappy: 5,
    };
    moodData['newMood'] = moodRatings[selected];
    fetch('http://localhost:3000/api/mood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(moodData),
    })
      .then((res) => res.json())
      .catch((err) => console.log('HandleSave Error', err));
  };

  // when delete button is clicked, access the value at selected date and remove it from the database
  const handleDelete = (date) => {
    fetch(`http://localhost:3000/api/:${date}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log('FETCH HandleDelete Error', err));
  };

  // when view charts button is clicked, fetch data from backend to render chart
  const handleCharts = () => {
    fetch('http://localhost:3000/api', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => setMoodList(res))
      .catch((err) => console.log('HandleCharts Error', err));
  };

  // when save button is clicked, get all moodData using FETCH request and render it on the screen with a graph
  return (
    <div className='moodTracker'>
      <div className='moodBtns'>
        <Button
          color='DarkBlue'
          sx={{ width: 80, padding: 3, margin: 1.5 }}
          onClick={() => handleClick(category[0])}
          variant={selected === category[0] ? 'contained' : 'text'}
        >
          <SentimentVeryDissatisfiedIcon className='material-icons' />
        </Button>

        <Button
          color='LightBlue'
          sx={{ width: 80, padding: 3, margin: 1.5 }}
          onClick={() => handleClick(category[1])}
          variant={selected === category[1] ? 'contained' : 'text'}
        >
          <SentimentDissatisfiedIcon className='material-icons' />
        </Button>

        <Button
          color='Gray'
          sx={{ width: 80, padding: 3, margin: 1.5 }}
          onClick={() => handleClick(category[2])}
          variant={selected === category[2] ? 'contained' : 'text'}
        >
          <SentimentNeutralIcon className='material-icons' />
        </Button>

        <Button
          color='LightGreen'
          sx={{ width: 80, padding: 3, margin: 1.5 }}
          onClick={() => handleClick(category[3])}
          variant={selected === category[3] ? 'contained' : 'text'}
        >
          <SentimentSatisfiedIcon className='material-icons' />
        </Button>

        <Button
          color='DarkGreen'
          sx={{ width: 80, padding: 3, margin: 1.5 }}
          onClick={() => handleClick(category[4])}
          variant={selected === category[4] ? 'contained' : 'text'}
        >
          <SentimentVerySatisfiedIcon className='material-icons' />
        </Button>
      </div>

      <div className='actions'>
        <Button
          color='Black'
          sx={{ width: 100, padding: 1, margin: 1.5 }}
          onClick={() => {
            handleAction(act[0]);
            handleSave(selected);
          }}
          variant={selectedAct === act[0] ? 'outlined' : 'text'}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>

        <Button
          color='Black'
          sx={{ width: 100, padding: 1, margin: 1.5 }}
          onClick={() => {
            handleAction(act[1]);
            handleDelete(date);
          }}
          variant={selectedAct === act[1] ? 'outlined' : 'text'}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>

        <Button
          color='Black'
          sx={{ width: 140, padding: 1, margin: 1.5 }}
          onClick={() => {
            handleAction(act[2]);
            handleCharts();
          }}
          variant={selectedAct === act[2] ? 'outlined' : 'text'}
          startIcon={<VisibilityIcon />}
        >
          View Chart
        </Button>
      </div>

      <div style={{ width: 600 }} className='moodChart'>
        {moodList && <LineChart chartData={moodList} />}
      </div>
    </div>
  );
}

export default Mood;
