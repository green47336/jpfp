import React, { Component } from "react";
import { updateStudent } from "../store";
import { connect } from "react-redux";

class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
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

  async componentDidUpdate(prevProps) {
    if (!prevProps.student.id && this.props.student.id) {
      this.setState({
        id: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        image: student.image,
        gpa: student.gpa,
        universityId: student.universityId || "",
      });
    }
  }

  async componentDidMount() {
    const { student } = this.props;
    if (student.id) {
      this.setState({
        id: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        image: student.image,
        gpa: student.gpa,
        universityId: student.universityId || "",
      });
    }
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
    this.props.updateStudent({ ...this.state });
  }
  render() {
    const { firstName, lastName, email, gpa, image, universityId } = this.state;
    const { handleSubmit, onChange } = this;

    return (
      <div id="update-student-form">
        <hr />
        <h3>Update Student</h3>
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
            Update
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    updateStudent: (student) => {
      return dispatch(updateStudent(student, history));
    },
  };
};

export default connect((state) => state, mapDispatchToProps)(UpdateStudent);
