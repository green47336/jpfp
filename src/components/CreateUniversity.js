import React, { Component } from "react";
import { createUniversity } from "../store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CreateUniversity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      address: "",
      slogan: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    const name = ev.target.name;
    const value = ev.target.value;
    const change = {};
    change[name] = value;
    this.setState(change);
    console.log(this.props.history);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.createUniversity({ ...this.state });
  }
  render() {
    const { name, image, address, slogan } = this.state;
    const { handleSubmit, onChange } = this;

    return (
      <div id="university-form">
        <p>Create New University</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input name="name" value={name} onChange={onChange} />

          <label htmlFor="image">Image URL: </label>
          <input name="image" value={image} onChange={onChange} />

          <label htmlFor="address">Address </label>
          <input name="address" value={address} onChange={onChange} />

          <label htmlFor="slogan">Slogan: </label>
          <input name="slogan" value={slogan} onChange={onChange} />

          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return state;
// };

const mapDispatchToProps = (dispatch, ownProps) => ({
  createUniversity: (university) => {
    dispatch(createUniversity(university, ownProps.history));
  },
});

export default connect(null, mapDispatchToProps)(CreateUniversity);
