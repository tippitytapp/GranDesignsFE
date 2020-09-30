import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory, Link } from "react-router-dom";


function AdminLogin() { 
    const history = useHistory()
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
    const handleChange = event => { 
        event.preventDefault();
        setLogin({...login, [event.target.name]: event.target.value})
    }
    const handleSubmit = event => { 
        event.preventDefault();
        console.log("login", login);
        localStorage.setItem('adminToken', true)
        history.push('/admin')
        
    }
    return (
      <div className="loginform">
        <h2>Login to Admin Dashboard</h2>
        <br />
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              value={login.username}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={login.password}
              onChange={handleChange}
            />
          </FormGroup>
          <Button>Login</Button>
        </Form>
      </div>
    );
}

export default AdminLogin;