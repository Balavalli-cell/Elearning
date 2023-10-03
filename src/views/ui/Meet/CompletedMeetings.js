import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class CMeetingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetings: [],
      editMeetingId: null, // Track the ID of the meeting being edited
      editedData: {}, // Track the edited data
    };
  }

  componentDidMount() {
    // Fetch meetings data from the API endpoint
    axios
      .get('http://localhost:3001/api/meetings') // Update the URL as needed
      .then((response) => {
        const currentTimestamp = new Date().getTime();
        const filteredMeetings = response.data.filter((meeting) => {
          const startTime = new Date(`${meeting.classDate}T${meeting.startTime}:00Z`).getTime();
          return startTime < currentTimestamp; // Filter meetings with a start time earlier than the current time
        });
        this.setState({ meetings: filteredMeetings });
      })
      .catch((error) => {
        console.error('Error fetching meetings:', error);
      });
  }
  
  
  

  handleDelete = (meetingId) => {
    axios
      .delete(`http://localhost:3001/api/meetings/${meetingId}`)
      .then(() => {
        // After successful deletion, remove the meeting from the state
        this.setState((prevState) => ({
          meetings: prevState.meetings.filter((meeting) => meeting._id !== meetingId),
        }));
      })
      .catch((error) => {
        console.error('Error deleting meeting:', error);
      });
  };

  handleUpdate = (meetingId) => {
    // Find the meeting to be edited
    const meetingToEdit = this.state.meetings.find((meeting) => meeting._id === meetingId);

    // Update the meeting data
    axios
      .put(`http://localhost:3001/api/meetings/${meetingId}`, meetingToEdit)
      .then((response) => {
        // Find the index of the updated meeting in the state and update it
        const updatedMeeting = response.data;
        const updatedMeetings = this.state.meetings.map((meeting) =>
          meeting._id === updatedMeeting._id ? updatedMeeting : meeting
        );

        this.setState({ meetings: updatedMeetings, editMeetingId: null, editedData: {} });
      })
      .catch((error) => {
        console.error('Error updating meeting:', error);
      });
  };

  handleEdit = (meetingId) => {
    // Set the meeting ID to be edited
    this.setState({ editMeetingId: meetingId });

    // Find the meeting to be edited
    const meetingToEdit = this.state.meetings.find((meeting) => meeting._id === meetingId);

    // Set the edited data
    this.setState({ editedData: meetingToEdit });
  };

  handleInputChange = (e) => {
    // Update the edited data
    const updatedData = { ...this.state.editedData, [e.target.name]: e.target.value };
    this.setState({ editedData: updatedData });
  };

  // Function to format time to 12-hour format with AM and PM
  formatTimeTo12HourFormat(time) {
    const [hour, minute] = time.split(':');
    const parsedHour = parseInt(hour, 10);
    const ampm = parsedHour >= 12 ? 'PM' : 'AM';
    const formattedHour = parsedHour % 12 === 0 ? '12' : (parsedHour % 12).toString();
    return `${formattedHour}:${minute} ${ampm}`;
  }

  render() {
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
                <th>View Feedback</th>
              </tr>
            </thead>
            <tbody>
              {this.state.meetings.map((meeting, index) => (
                <tr key={meeting._id}>
                  <td>{index + 1}</td>
                  <td>
                    {this.state.editMeetingId === meeting._id ? (
                      <input
                        type="text"
                        name="classTitle"
                        value={this.state.editedData.classTitle}
                        onChange={this.handleInputChange}
                      />
                    ) : (
                      meeting.classTitle
                    )}
                  </td>
                  <td>{meeting.classDate}</td>
                  <td>
                    {this.state.editMeetingId === meeting._id ? (
                      <input
                        type="text"
                        name="startTime"
                        value={this.state.editedData.startTime}
                        onChange={this.handleInputChange}
                      />
                    ) : (
                      this.formatTimeTo12HourFormat(meeting.startTime)
                    )}
                  </td>
                  <td>
                    <button
                      className='btn btn-primary'
                    >
                      View Feedback
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CMeetingDetails;
