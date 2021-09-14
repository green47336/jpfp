import React from "react";
import { updateStudents } from "../store";
import { connect } from "react-redux";

const _Students = ({ students, universities }) => {
  return (
    <div id="students-module">
      <h3>Students</h3>

      {students.map((currentStudent) => {
        return (
          <div key={currentStudent.id}>
            <img
              onClick={() => {
                select(currentStudent);
              }}
              src={currentStudent.image}
            ></img>
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const Students = connect((state) => state, mapDispatchToProps)(_Students);

export default Students;
