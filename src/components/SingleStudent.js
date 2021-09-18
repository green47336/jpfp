import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import UpdateStudent from "./UpdateStudent";

const _SingleStudent = ({ students, universities, history, match }) => {
  //Ensures we don't crash on a hard reload
  if (students.length === 0 || universities.length === 0) {
    return "Loading...";
  }

  const theStudent = students.find(
    (student) => student.id === match.params.id * 1
  );
  const theUniversity = universities.find(
    (university) => university.id === theStudent.universityId * 1
  );

  return (
    <div id="single-student-module">
      <h3>{`Details for ${theStudent.firstName}`}</h3>
      <ul>
        <li>
          <img
            src={
              theStudent.image ||
              "https://static.vecteezy.com/system/resources/thumbnails/000/511/962/small/57_Student.jpg"
            }
          ></img>
        </li>
        <li>{`Full name: ${theStudent.firstName} ${theStudent.lastName}`}</li>
        <li>{`Email: ${theStudent.email || "No email set!"}`}</li>
        <li>{`GPA: ${theStudent.gpa}`}</li>

        {theUniversity ? (
          <li>
            {"Attends: "}
            {
              <Link to={`/universities/${theUniversity.id}`}>
                {theUniversity.name}
              </Link>
            }
          </li>
        ) : (
          <li>{"Attends: Currently Unregistered"}</li>
        )}
      </ul>
      <UpdateStudent history={history} student={theStudent} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const SingleStudent = connect(mapStateToProps)(_SingleStudent);

export default SingleStudent;
