import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { Link } from "react-router-dom"; // Import the Link component from React Router

class Deposit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      accountType: "",
    };
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Perform deposit income bank transaction logic here
    console.log("Amount:", this.state.amount);
    console.log("Account Type:", this.state.accountType);
    // Reset form fields
    this.setState({ amount: "", accountType: "" });
  };

  render() {
    const { amount, accountType } = this.state;

    return (
      <div className="deposit-container">
        <h2 className="deposit-title">Deposit</h2>
        <div className="deposit-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                value={amount}
                onChange={this.handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Deposit.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Deposit);
