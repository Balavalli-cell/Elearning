import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Meet/MeetLink.css';

function EditMeet() {
  const { meetingId } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [editedData, setEditedData] = useState({});
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    // Fetch the meeting data for editing
    axios.get(`http://localhost:3001/api/meetings/${meetingId}`)
      .then((response) => {
        setEditedData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching meeting for editing:', error);
      });
  }, [meetingId]);

  const handleUpdate = () => {
    // Update the meeting data
    axios
      .put(`http://localhost:3001/api/meetings/${meetingId}`, editedData)
      .then(() => {
        setAlertMessage('Information is Updated Successfully');
      })
      .catch((error) => {
        console.error('Error updating meeting:', error);
      });
  };

  return (
    <div className="App">
      <h2>Edit Meeting</h2>
      <div className="centered-form">
        {alertMessage && <div className='alert alert-success'>{alertMessage}</div>}
        {/* Your form for editing meeting details */}
        <div>
          <label className='label'>Class Title:</label><pre className='tab'></pre>
          <input
            type="text"
            name="classTitle"
            value={editedData.classTitle}
            onChange={(e) => setEditedData({ ...editedData, classTitle: e.target.value })}
          />
        </div>
        <div>
          <label className='label'>Class Date:</label><pre className='tab'></pre>
          <input
            type="date"
            name="classDate"
            value={editedData.classDate}
            onChange={(e) => setEditedData({ ...editedData, classDate: e.target.value })}
          />
        </div>
        <div>
          <label className='label'>Start Time:</label><pre className='tab'></pre>
          <input
            type="time"
            name="startTime"
            value={editedData.startTime}
            onChange={(e) => setEditedData({ ...editedData, startTime: e.target.value })}
          />
        </div>
        <div>
          <label className='label'>End Time:</label><pre className='tab'></pre>
          <input
            type="time"
            name="endTime"
            value={editedData.endTime}
            onChange={(e) => setEditedData({ ...editedData, endTime: e.target.value })}
          />
        </div>
        <div>
          <label className='label'>Google Meet Link:</label><pre className='tab'></pre>
          <input
            type="text"
            name="googleMeetLink"
            value={editedData.googleMeetLink}
            onChange={(e) => setEditedData({ ...editedData, googleMeetLink: e.target.value })}
          /><pre className='tab'></pre>
        </div>
        <button className='button'  onClick={handleUpdate}>Update</button>
        <button className='button' onClick={() => navigate('/MeetingDetails')}>Back to Meeting Details</button>
      </div>
    </div>
  );
}

export default EditMeet;
