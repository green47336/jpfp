import React from "react";
import { updateStudents } from "../store";
import { connect } from "react-redux";
import CreateUniversity from "./CreateUniversity";

const _Universities = ({ students, universities }) => {
  // universities.map((university) => {
  //     if(!university.id)
  // })
  return (
    <div>
      <div id="universities-module">
        <h3>Universities</h3>

        {universities.map((currentUniversity) => {
          const univEnrollmentLength = students.filter((student) => {
            return student.universityId === currentUniversity.id;
          }).length;
          return (
            <div key={currentUniversity.id}>
              <img src={currentUniversity.image}></img>
              <ul>
                <li>
                  {`${currentUniversity.name} (${univEnrollmentLength} ${
                    univEnrollmentLength === 1 ? "enrollment" : "enrollments"
                  })`}
                </li>
                <li>{`Slogan: ${currentUniversity.slogan}`}</li>
                <li>{`Address: ${currentUniversity.address}`}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <CreateUniversity />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const Universities = connect(
  (state, ownProps) => state,
  mapDispatchToProps
)(_Universities);

export default Universities;