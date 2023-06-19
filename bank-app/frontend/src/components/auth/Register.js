import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import M from "materialize-css/dist/js/materialize.min.js";
import "../../App.css";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.nameInput = React.createRef();
    this.nameLabel = React.createRef();
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    M.updateTextFields();

    this.nameInput.current.addEventListener("focus", this.handleInputFocus);
    this.nameInput.current.addEventListener("blur", this.handleInputBlur);
  }

  componentWillUnmount() {
    this.nameInput.current.removeEventListener("focus", this.handleInputFocus);
    this.nameInput.current.removeEventListener("blur", this.handleInputBlur);
  }

  handleInputFocus = (e) => {
    this.nameLabel.current.classList.add("active");
  };

  handleInputBlur = (e) => {
    if (e.target.value === "") {
      this.nameLabel.current.classList.remove("active");
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect green-text">
              <i className="material-icons left green-text">keyboard_backspace</i> Back to home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4 style={{ fontFamily: "Share Tech Mono, monospace", color: "green" }}>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1 green-text">
                Already have an account? <Link to="/login" className="green-text">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  ref={this.nameInput}
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                  style={{ color: "green", backgroundColor: "black"}}
                />
                <label htmlFor="name" ref={this.nameLabel} className="green-text">
                  Name
                </label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                  style={{ color: "green", backgroundColor: "black"}}
                />
                <label htmlFor="email" className="green-text">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                  style={{ color: "green", backgroundColor: "black"}}
                />
                <label htmlFor="password" className="green-text" >Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                  style={{ color: "green", backgroundColor: "black"}}
                />
                <label htmlFor="password2" className="green-text">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    fontFamily: "Share Tech Mono, monospace" ,
                    color: "green", 
                    backgroundColor: "black"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable black green-text"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
