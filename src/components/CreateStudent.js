import React, { Component } from "react";
import { createStudent } from "../store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      image: "",
      gpa: "",
      universityId: 0,
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
    console.log(this.props);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.createStudent({ ...this.state });
    console.log("handleSubmit hit");
  }
  render() {
    const { firstName, lastName, email, image, university } = this.state;
    const { handleSubmit, onChange } = this;

    return (
      <div>
        <hr />
        <p>Create New Student</p>
        <form id="student-form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name: </label>
          <input name="firstName" value={firstName} onChange={onChange} />

          <label htmlFor="lastName">Last Name: </label>
          <input name="lastName" value={lastName} onChange={onChange} />

          <label htmlFor="email">Email: </label>
          <input name="email" value={email} onChange={onChange} />

          <label htmlFor="image">Image URL: </label>
          <input name="image" value={image} onChange={onChange} />

          <label htmlFor="university">University: </label>
          <select name="university" value={university} onChange={onChange}>
            {this.props.universities.map((university) => (
              <option key={university.id} value={university.id * 1}>
                {university.name}
              </option>
            ))}
          </select>

          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createStudent: (student) => dispatch(createStudent(student, history)),
});

export default connect((state) => state, mapDispatchToProps)(CreateStudent);
