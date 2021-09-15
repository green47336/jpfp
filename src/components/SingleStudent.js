import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const _SingleStudent = ({ students, universities, history, match }) => {
  //Ensures we don't crash on a hard reload
  if (students.length === 0 || universities.length === 0) {
    return "Loading...";
  }

  const theStudent = students.find(
    (student) => student.id === match.params.id * 1
  );
  const theUniversity = universities.find(
    (university) => university.id === theStudent.universityId
  );

  return (
    <div id="single-student-module">
      <p>{`Details for ${theStudent.firstName}`}</p>
      <ul>
        <li>
          <img src={theStudent.image}></img>
        </li>
        <li>{`Full name: ${theStudent.firstName} ${theStudent.lastName}`}</li>
        <li>{`Email: ${theStudent.email}`}</li>
        <li>{`GPA: ${theStudent.gpa}`}</li>
        <Link to={`/universities/${theUniversity.id}`}>
          <li>{`Attends: ${theUniversity.name}`}</li>
        </Link>
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const SingleStudent = connect(
  mapStateToProps,
  mapDispatchToProps
)(_SingleStudent);

export default SingleStudent;
