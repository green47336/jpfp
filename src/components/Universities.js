import React from "react";
import { deleteUniversity } from "../store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CreateUniversity from "./CreateUniversity";

const _Universities = ({
  students,
  universities,
  deleteUniversity,
  history,
}) => {
  return (
    <div id="universities-page">
      <div id="universities-module">
        <h3>Universities</h3>

        {universities.map((currentUniversity) => {
          const univEnrollmentLength = students.filter((student) => {
            return student.universityId === currentUniversity.id;
          }).length;
          return (
            <div key={currentUniversity.id}>
              <Link to={`/universities/${currentUniversity.id}`}>
                <img src={currentUniversity.image}></img>
              </Link>

              <ul>
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      deleteUniversity(currentUniversity.id);
                    }}
                  >
                    Delete University
                  </button>
                </li>
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
      <CreateUniversity history={history} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUniversity: (id) => {
      dispatch(deleteUniversity(id, history));
    },
  };
};

const Universities = connect(
  (state, ownProps) => state,
  mapDispatchToProps
)(_Universities);

export default Universities;
