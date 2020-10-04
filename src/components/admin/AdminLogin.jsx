import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logUserIn} from "../../store/actions/adminActions"


function AdminLogin(props) { 
    const history = useHistory()
    const [login, setLogin] = useState({
        name: "",
        password: ""
    })
    const handleChange = event => { 
        event.preventDefault();
        setLogin({...login, [event.target.name]: event.target.value})
    }
    const handleSubmit = event => { 
      event.preventDefault();
        props.logUserIn(login)
        history.push('/admin')
        
    }
    return (
      <div className="loginform">
        <h2>Login to Admin Dashboard</h2>
        <br />
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={login.name}
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

const mapStateToProps = state => { 
  return {
    isLoggedIn: state.ar.isLoggedIn,
    isLogginErrorMessage: state.ar.isLogginErrorMessage,
    token: state.ar.token
  };
}

export default connect(mapStateToProps, {logUserIn})(AdminLogin);