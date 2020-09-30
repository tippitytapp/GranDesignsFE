import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Row,
  Col,
} from "reactstrap";
import { useHistory, Link } from "react-router-dom";
function Register() {
  const history = useHistory();
  const [valid, setValid] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [checked, setChecked] = useState(false);
  const [address, setAddress] = useState({
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    over18: false,
  });

  const handleChange = (event) => {
    event.preventDefault();
    // console.log(event.target.value)
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };
  const handleAddchange = (event) => {
    event.preventDefault();
    setAddress({ ...address, [event.target.name]: event.target.value });
  };
  const confirmPW = (event) => {
    event.preventDefault();
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
    // console.log(event.target.value)
    if (event.target.value === newUser.password) {
      setValid(true);
      setInvalid(false);
    } else {
      setValid(false);
      setInvalid(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newUser.address = address;
    setNewUser({
      username: "",
      email: "",
      password: "",
      cpassword: "",
      over18: false,
    });
    localStorage.setItem('userToken', true)
    history.push("/login");
  };
  const handleChecked = (event) => {
    // event.preventDefault()
    setChecked(!checked);
    setNewUser({ ...newUser, [event.target.name]: !checked });
  };
  return (
    <div className="registerform">
      <h2>Register for an Account</h2>
      <br/>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="username"
            value={newUser.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            value={newUser.password}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cpassword">Confirm Password</Label>
          <Input
            id="cpassword"
            name="cpassword"
            type="password"
            placeholder="confirm password"
            valid={valid}
            invalid={invalid}
            value={newUser.cpassword}
            onChange={confirmPW}
          />
          <FormFeedback valid>Passwords Match!</FormFeedback>
          <FormFeedback>Passwords Must Match</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            type="text"
            name="address"
            id="address"
            placeholder="1234 Main St"
            value={address.address}
            onChange={handleAddchange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address2">Address 2</Label>
          <Input
            type="text"
            name="address2"
            id="address2"
            placeholder="Apartment, studio, or floor"
            value={address.address2}
            onChange={handleAddchange}
          />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                id="city"
                placeholder="city"
                value={address.city}
                onChange={handleAddchange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="state">State</Label>
              <Input
                type="text"
                name="state"
                id="state"
                placeholder="state"
                value={address.state}
                onChange={handleAddchange}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="zip">Zip</Label>
              <Input
                type="text"
                name="zip"
                id="zip"
                placeholder="zip"
                value={address.zip}
                onChange={handleAddchange}
              />
            </FormGroup>
          </Col>
        </Row>
        <div className="formbottom">
          <FormGroup>
            <Input
              type="checkbox"
              name="over18"
              id="over18"
              value={newUser.over18}
              onChange={handleChecked}
            />
            <Label for="over18">
              By Checking this box, you confirm you are over the age of 18.
            </Label>
          </FormGroup>
          <Button>Register</Button>
        </div>
      </Form>
      <br />
      <br />
      <p className="linkbottom">
        Already have an account? Click <Link to="/login">here</Link> to login.
      </p>
    </div>
  );
}

export default Register;
