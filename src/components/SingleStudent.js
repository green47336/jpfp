import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const _SingleStudent = ({ students, universities, history, match }) => {
  const theStudent = students.find(
    (student) => student.id === match.params.id * 1
  );
  if (!theStudent) {
    return `Loading...`;
  }
  if (!universities) {
    console.log("Yooooo universities aint hereee");
    return "Loading...";
  }
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
        <Link to="/universities">
          <li>{`Attends: ${universities.find(
            (university) => university.id === theStudent.universityId
          )}`}</li>
        </Link>
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(`ownPropssss: ${JSON.stringify(ownProps)}`);
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
