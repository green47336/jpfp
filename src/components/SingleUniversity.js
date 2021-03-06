import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateStudent } from "../store";
import UpdateUniversity from "./UpdateUniversity";

const _SingleUniversity = ({
  students,
  universities,
  history,
  match,
  updateStudent,
}) => {
  //Ensures we don't crash on a hard reload
  if (students.length === 0 || universities.length === 0) {
    return "Loading...";
  }

  const theUniversity = universities.find(
    (university) => university.id === match.params.id * 1
  );
  const theStudents = students.filter(
    (student) => student.universityId * 1 === theUniversity.id
  );

  return (
    <div id="single-university-module">
      <h3>Details for {theUniversity.name}</h3>
      <ul>
        <li>
          <img
            src={
              theUniversity.image ||
              "https://www.clipartkey.com/mpngs/m/269-2699862_university-campus-icon.png"
            }
          ></img>
        </li>
        <li>Slogan: {theUniversity.slogan || "No slogan set!"}</li>
        <li>Address: {theUniversity.address || "No address set!"}</li>
      </ul>

      <div>
        Enrollees:
        <ul>
          {theStudents.length === 0
            ? "No students currently enrolled!"
            : theStudents.map((student) => (
                <li key={student.id}>
                  <Link to={`/students/${student.id}`}>
                    {student.firstName}
                  </Link>
                  <button
                    id="unregister-button"
                    onClick={() => {
                      updateStudent({ ...student, universityId: NaN });
                    }}
                  >
                    Unregister
                  </button>
                </li>
              ))}
        </ul>
      </div>
      <UpdateUniversity history={history} university={theUniversity} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    updateStudent: (student) => {
      return dispatch(updateStudent(student, history));
    },
  };
};

const SingleUniversity = connect(
  mapStateToProps,
  mapDispatchToProps
)(_SingleUniversity);

export default SingleUniversity;
