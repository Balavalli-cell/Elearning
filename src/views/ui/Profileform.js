import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const Profileform = ({ updateUserData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    city: "",
    age: "",
    dob: "",
    occupation: "",
    about: "",
    profilePic: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission (e.g., send data to the server)

    // Update user data in the parent component
    updateUserData(formData);
  };

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            User Profile Form
          </CardTitle>
          <CardBody>
          <Form action="/update-user" method="PUT" onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Gender</legend>
                <FormGroup check>
                  <Input
                    name="gender"
                    type="radio"
                    value="male"
                  />{" "}
                  <Label check className="form-label">
                    Male
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="gender"
                    type="radio"
                    value="female"
                  />{" "}
                  <Label check className="form-label">
                    Female
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="gender"
                    type="radio"
                    value="others"
                  />{" "}
                  <Label check className="form-label">
                    Others
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="Enter your city"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  id="age"
                  name="age"
                  placeholder="Enter your age"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                />
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Occupation</legend>
                <FormGroup check>
                  <Input
                    name="occupation"
                    type="radio"
                    value="school"
                  />{" "}
                  <Label check className="form-label">
                    School
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="occupation"
                    type="radio"
                    value="college"
                  />{" "}
                  <Label check className="form-label">
                    College
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="occupation"
                    type="radio"
                    value="work"
                  />{" "}
                  <Label check className="form-label">
                    Work
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for="about">About</Label>
                <Input
                  id="about"
                  name="about"
                  type="textarea"
                  placeholder="Tell us about yourself"
                />
              </FormGroup>
              <FormGroup>
                <Label for="profilePic">Profile Picture</Label>
                <Input
                  id="profilePic"
                  name="profilePic"
                  type="file"
                />
                <FormText>
                  Upload your profile picture here.
                </FormText>
              </FormGroup>
              <Button className="mt-2">Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Profileform;
