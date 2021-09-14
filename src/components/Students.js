import React from "react";
import { fetchStudents } from "../store";
import { connect } from "react-redux";

const _Students = ({ students, universities }) => {
  return (
    <div id="students-module">
      <h3>Students</h3>

      {students.map((currentStudent) => {
        return (
          <div>
            <img src={currentStudent.image}></img>
            <ul key={currentStudent.id}>
              <li
                id="student-first-li"
                onClick={() => {
                  select(currentStudent);
                }}
              >
                {`${currentStudent.firstName} - attends the ${universities
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
