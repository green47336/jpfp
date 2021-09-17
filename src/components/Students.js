import React from "react";
import { updateStudents, deleteStudent } from "../store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CreateStudent from "./CreateStudent";

const _Students = ({ students, universities, deleteStudent, history }) => {
  return (
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
                {`${currentStudent.firstName} attends the ${universities
                  .map((university) => {
                    if (university.id === currentStudent.universityId) {
                      return university.name;
                    }
                  })
                  .join("")}.`}
              </li>
              <li>{`Full name: ${currentStudent.firstName} ${currentStudent.lastName}`}</li>
              <li>{`Email: ${currentStudent.email}`}</li>
              <li>{`GPA: ${currentStudent.gpa}`}</li>
            </ul>
          </div>
        );
      })}
      <div id="create-student">
        <CreateStudent history={history} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteStudent: (student) => {
      dispatch(deleteStudent(student, ownProps.history));
    },
  };
};

const Students = connect((state) => state, mapDispatchToProps)(_Students);

export default Students;
