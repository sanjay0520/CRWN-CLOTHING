import React from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign up with your email and password</span>

        <form onClick={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handelChange={this.handleChange}
            label="enter email..."
            required
          ></FormInput>

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handelChange={this.handleChange}
            label="password"
            required
          ></FormInput>
          <div className="buttons">
            <CustomButton name="submit" type="submit">
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              {" "}
              Sign In with Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
