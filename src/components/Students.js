import React from "react";
import { updateStudents, deleteStudent } from "../store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CreateStudent from "./CreateStudent";

const _Students = ({ students, universities, deleteStudent, history }) => {
  return (
    <div id="students-page">
      <div id="students-module">
        <h3>Students</h3>

        {students.map((currentStudent) => {
          return (
            <div key={currentStudent.id}>
              <Link to={`/students/${currentStudent.id}`}>
                <img src={currentStudent.image}></img>
              </Link>
              <button
                type="button"
                onClick={() => {
                  deleteStudent(currentStudent.id);
                }}
              >
                X
              </button>
              <ul>
                <li>
                  {universities
                    .map((university) => {
                      if (
                        university.id * 1 ===
                        currentStudent.universityId * 1
                      ) {
                        return `${currentStudent.firstName} attends the ${university.name}.`;
                      }
                    })
                    .join("")}
                </li>
                <li>{`Full name: ${currentStudent.firstName} ${currentStudent.lastName}`}</li>
                <li>{`Email: ${currentStudent.email}`}</li>
                <li>{`GPA: ${currentStudent.gpa}`}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <div id="create-student">
        <CreateStudent history={history} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteStudent: (id) => {
      dispatch(deleteStudent(id, history));
    },
  };
};

const Students = connect((state) => state, mapDispatchToProps)(_Students);

export default Students;
