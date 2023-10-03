import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function formatTimeTo12HourFormat(time) {
  const [hour, minute] = time.split(':');
  const parsedHour = parseInt(hour, 10);
  const ampm = parsedHour >= 12 ? 'PM' : 'AM';
  const formattedHour = parsedHour % 12 === 0 ? '12' : (parsedHour % 12).toString();
  return `${formattedHour}:${minute} ${ampm}`;
}

function MeetingDetail() {
  const [meetings, setMeetings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch meetings data from the API endpoint
    axios.get('http://localhost:3001/api/meetings') // Update the URL as needed
      .then((response) => {
        const currentTimestamp = new Date().getTime();
        const filteredMeetings = response.data.filter((meeting) => {
          const startTime = new Date(`${meeting.classDate}T${meeting.startTime}:00Z`).getTime();
          return startTime > currentTimestamp;
        });
        setMeetings(filteredMeetings);
      })
      .catch((error) => {
        console.error('Error fetching meetings:', error);
      });
  }, []); // Empty dependency array to mimic componentDidMount behavior

  const handleDelete = (meetingId) => {
    axios
      .delete(`http://localhost:3001/api/meetings/${meetingId}`)
      .then(() => {
        // After successful deletion, remove the meeting from the state
        setMeetings((prevMeetings) => prevMeetings.filter((meeting) => meeting._id !== meetingId));
      })
      .catch((error) => {
        console.error('Error deleting meeting:', error);
      });
  };

  const navigateToEditMeeting = (meetingId) => {
    // Navigate to the editing page with the meetingId as a URL parameter
    navigate(`/edit-meeting/${meetingId}`);
  };

  return (
    <div className='w-100  d-flex justify-content-center align-items-center'>
      <div className='w-100'>
        <h2>Meeting Details</h2>
        <table className='table table-bordered border-primary'>
          <thead>
            <tr className='border border-danger'>
              <th>S.No</th>
              <th>Class Title</th>
              <th>Class Date</th>
              <th>Start Time</th>
              <th>Meeting Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((meeting, index) => (
              <tr key={meeting._id}>
                <td>{index + 1}</td>
                <td>{meeting.classTitle}</td>
                <td>{meeting.classDate}</td>
                <td>{formatTimeTo12HourFormat(meeting.startTime)}</td>
                <td>{meeting.googleMeetLink}</td>
                <td>
                  <button className='btn btn-success' onClick={() => navigateToEditMeeting(meeting._id)}>Edit</button>
                  <button className='btn btn-danger' onClick={() => handleDelete(meeting._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/MeetLink" className='btn btn-primary'>Create Meeting</Link>
      </div>
    </div>
  );
}

export default MeetingDetail;
