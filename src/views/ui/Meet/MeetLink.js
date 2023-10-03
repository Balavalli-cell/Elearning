import React, { Component } from 'react';
import '../Meet/MeetLink.css';

class MeetingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classTitle: '',
      classDate: '',
      startTime: '',
      endTime: '',
      googleMeetLink: '',
      errors: {}, // Add a state property for errors
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  generateMeetLink = () => {
    // Redirect to Google Meet website
    const googleMeetLink = 'https://meet.google.com/';
    window.open(googleMeetLink, '_blank');
    // Set the generated link in the input box
    this.setState({ googleMeetLink });
  };

  postMeetLink = () => {
    // Validate input before sending data to the backend
    const errors = {};

    if (!this.state.classTitle) {
      errors.classTitle = 'Class Title is required';
    }
    if (!this.state.classDate) {
      errors.classDate = 'Class Date is required';
    }
    if (!this.state.startTime) {
      errors.startTime = 'Start Time is required';
    }
    if (!this.state.endTime) {
      errors.endTime = 'End Time is required';
    }

    // If there are errors, update the state and do not proceed with the POST request
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    // If there are no errors, send data to the backend
    fetch('http://localhost:3001/api/meetings', { // Update the URL as needed
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server as needed
        console.log(data);
        // Clear the form after successful submission
        this.setState({
          classTitle: '',
          classDate: '',
          startTime: '',
          endTime: '',
          googleMeetLink: '',
          errors: {}, // Clear any previous errors
        }); 

        // Show a success message using window.alert
      window.alert('You have generated the Meet Link successfully!');
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

    // Add a function to handle details button click
    handleDetailsClick = () => {
      // Implement the logic to show details or navigate to a details page
      // You can add your custom logic here
      console.log('Details button clicked');
    };

  render() {
    return (
      <div className="App">
        <h1>Generate a Google Meet Link</h1>
        <div className="centered-form">
          <br></br>

          <label className='label'>Generate Meet Link:</label><pre className='tab'></pre>
          <input
            type="text"
            name="googleMeetLink"
            value={this.state.googleMeetLink}
            onChange={this.handleInputChange}
          />
          <button className='button' onClick={this.generateMeetLink}>Generate</button>
        

        <div>
          <label className='label'>Class Title:</label><pre className='tab'></pre>
          <input
            type="text"
            name="classTitle"
            value={this.state.classTitle}
            onChange={this.handleInputChange}
          />
          {this.state.errors.classTitle && (
            <div className="error">{this.state.errors.classTitle}</div>
          )}
        </div>

        <div>
          <label className='label'>Class Date:</label><pre className='tab'></pre>
          <input
            type="date"
            name="classDate"
            value={this.state.classDate}
            onChange={this.handleInputChange}
          />
          {this.state.errors.classDate && (
            <div className="error">{this.state.errors.classDate}</div>
          )}
        </div>

        <div>
          <label className='label'>Meeting Time:</label><pre className='tab'></pre>
          <input
            type="time"
            name="startTime"
            value={this.state.startTime}
            onChange={this.handleInputChange}
          /><pre className='tab'></pre>
          {this.state.errors.startTime && (
            <div className="error">{this.state.errors.startTime}</div>
          )}
          <span className='span'> to </span><pre className='tab'></pre>
          <input
            type="time"
            name="endTime"
            value={this.state.endTime}
            onChange={this.handleInputChange}
          />
          {this.state.errors.endTime && (
            <div className="error">{this.state.errors.endTime}</div>
          )}
        </div>
        <div className='post'>
        <button className='button' onClick={this.postMeetLink}>Post</button>
        </div>
      </div>
      </div>
    );
  }
}

export default MeetingForm;