import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const _SingleUniversity = ({ students, universities, history, match }) => {
  //Ensures we don't crash on a hard reload
  if (students.length === 0 || universities.length === 0) {
    return "Loading...";
  }

  const theUniversity = universities.find(
    (university) => university.id === match.params.id * 1
  );
  const theStudents = students.filter(
    (student) => student.universityId === theUniversity.id
  );

  return (
    <div id="single-university-module">
      <p>Details for {theUniversity.name}</p>
      <ul>
        <li>
          <img src={theUniversity.image}></img>
        </li>
        <li>Slogan: {theUniversity.slogan}</li>
        <li>Address: {theUniversity.address}</li>
      </ul>

      <div>
        Enrollees:
        <ul>
          {theStudents.map((student) => (
            <Link to={`/students/${student.id}`}>
              <li key={student.id}>{student.firstName}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const SingleUniversity = connect(
  mapStateToProps,
  mapDispatchToProps
)(_SingleUniversity);

export default SingleUniversity;
