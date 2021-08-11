import React from "react";
import FormInput from "./api";
import Button from "./button";
class Login extends React.Component {
  state = {
    user: {
      username: "",
      password: ""
    },
    errors: {},
    submitted: false
  };
  handleChange = (event) => {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  };
  onSubmit = () => {
    const {
      user: { username, password }
    } = this.state;
    let err = {};
    if (!username) {
      err.username = "Please enter a valid username";
    }
    if (password.length < 8) {
      err.password = "password must be more than 8 characters";
    }
    this.setState({ errors: err }, () => {
      if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
        this.setState({ submitted: true });
      }
    });
  };
  render() {
    const {
      submitted,
      errors,
      user: { username, password }
    } = this.state;
    return (
      <div>
        {submitted ? (
          <h3>Welcome {username}</h3>
        ) : (
          <div>
            <h3>Login !</h3>
            <FormInput
              label="Usename"
              name="username"
              type="text"
              value={username}
              onChange={this.handleChange}
              placeholder="Enter username..."
              error={errors.username}
              required
              className="input"
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Enter Password..."
              error={errors.password}
              required
              className="input"
            />
            <Button label="Login" type="submit" handleClick={this.onSubmit} />
          </div>
        )}
      </div>
    );
  }
}
export default Login;
