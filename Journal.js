import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Journal({ date }) {
  // const journalData = {
  //   newDate: date,
  // };
  const act = ['save', 'delete', 'exit'];
  const [selectedAct, setSelectedAct] = useState('');
  const handleAction = (value) => setSelectedAct(value);

  // const [textVal, setTextVal] = useState('');
  // const onTextChange = (e) => setTextVal(e.target.value);

  // create handle Save
  // const handleSave = (textVal) => {
  //   journalData['newEntry'] = textVal;
  //   fetch('http://localhost:3000/journal/entry', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(journalData),
  //   })
  //     .then((res) => res.json())
  //     .catch((err) => console.log('Journal HandleSave Error', err));
  // };
  return (
    <div>
      <TextField
        multiline
        rows={7}
        style={{ width: 550 }}
        // value={textVal}
        // onChange={onTextChange}
      />
      <div className='actions'>
        <Button
          color='Black'
          sx={{ width: 100, padding: 1, margin: 1.5 }}
          onClick={() => {
            handleAction(act[0]);
            // handleSave(textVal);
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
            // handleDelete(date);
          }}
          variant={selectedAct === act[1] ? 'outlined' : 'text'}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
      <div className='LogoutBtn'>
        <Button
          color='Black'
          sx={{ width: 100, padding: 1, margin: 1.5 }}
          onClick={() => handleAction(act[2])}
          variant={selectedAct === act[2] ? 'outlined' : 'text'}
          startIcon={<ExitToAppIcon />}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Journal;
