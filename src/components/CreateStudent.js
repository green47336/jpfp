import React, { Component } from "react";
import { createStudent } from "../store";
import { connect } from "react-redux";

class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      image: "",
      gpa: "",
      universityId: "",
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
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.createStudent({ ...this.state });
  }
  render() {
    const { firstName, lastName, email, gpa, image, universityId } = this.state;
    const { handleSubmit, onChange } = this;

    return (
      <div id="student-form">
        <h3>Create New Student</h3>
        <p>Required field *</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name: *</label>
          <input name="firstName" value={firstName} onChange={onChange} />

          <label htmlFor="lastName">Last Name: *</label>
          <input name="lastName" value={lastName} onChange={onChange} />

          <label htmlFor="email">Email: </label>
          <input name="email" value={email} onChange={onChange} />

          <label htmlFor="gpa">GPA: *</label>
          <input name="gpa" value={gpa} onChange={onChange} />

          <label htmlFor="image">Image URL: </label>
          <input name="image" value={image} onChange={onChange} />

          <label htmlFor="universityId">University: *</label>
          <select name="universityId" value={universityId} onChange={onChange}>
            <option value={""}>--Select University--</option>
            {this.props.universities.map((university) => (
              <option key={university.id} value={university.id}>
                {university.name}
              </option>
            ))}
          </select>
          <div>
            <hr />
          </div>
          <button
            disabled={!firstName || !lastName || !gpa || !universityId}
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  createStudent: (student) => dispatch(createStudent(student, history)),
});

export default connect(({ universities }) => {
  return {
    universities,
  };
}, mapDispatchToProps)(CreateStudent);
