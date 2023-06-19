import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import "../../App.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    const { emailClass } = this.state.email ? "active" : "";
    const { passwordClass } = this.state.password ? "active" : "";

    return (
      <div className="container" style={{ backgroundColor: "black" }}>
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect green-text">
              <i className="material-icons left green-text">keyboard_backspace</i> Back to home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4 style={{ fontFamily: "Share Tech Mono, monospace", color: "green" }}>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1" style={{ fontFamily: "Share Tech Mono, monospace", color: "green" }}>
                Don't have an account? <Link to="/register" style={{ fontFamily: "Share Tech Mono, monospace", color: "green" }}>Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
              <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames(emailClass, {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                  style={{ color: "green", backgroundColor: "black" }} 
                />
                <label htmlFor="email" style={{ fontFamily: "Share Tech Mono, monospace", color: "green" }}>Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames(passwordClass, {
                  invalid: errors.password || errors.passwordincorrect,
                })}
                style={{ color: "green", backgroundColor: "black" }} // Add this style
              />

                <label htmlFor="password" style={{ fontFamily: "Share Tech Mono, monospace", color: "green" }}>Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{ fontFamily: "Share Tech Mono, monospace", backgroundColor: "green", color: "black" }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable black green-text"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
