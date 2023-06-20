import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { depositAmount, logoutUser, withdrawlAmount } from "../actions/authActions";
import { Link } from "react-router-dom";
import withdrawlReducer from "../reducers/withdrawlReducer";

class Withdrawal extends Component {
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
    const { name, value } = e.target;
    this.setState({ [name]: parseFloat(value) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { depositAmount } = this.state;
    this.props.withdrawlAmount(depositAmount);
    this.setState({ amount: "", accountType: "" });
  };

  render() {
    const { amount } = this.state;

    return (
      <div className="deposit-container">
        <h2 className="deposit-title"  style={{ fontFamily: "Share Tech Mono, monospace", color:"green"}}>Withdrawal</h2>
        <Link
            to="/dashboard"
            style={{
              fontFamily: "monospace",
            }}
            className="col s5 brand-logo center black-text"
          >
            <i className="material-icons"  style={{ color:"green"}} >arrow_back</i>
          </Link>
        <div className="deposit-form-container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="amount"  style={{ fontFamily: "Share Tech Mono, monospace", color:"green"}}>Amount:</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                name="amount"
                value={amount}
                onChange={this.handleChange}
                required
                style={{ color: "green", backgroundColor: "black" }}
              />
            </div>
            <button type="submit"  style={{ fontFamily: "Share Tech Mono, monospace", color:"green"}} className="btn btn-primary black"
            >
              Withdrawl
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Withdrawal.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  withdrawAmount: PropTypes.func.isRequired,
};

export default connect(null, { logoutUser, withdrawlAmount })(Withdrawal);
