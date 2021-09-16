import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

const LOAD_STUDENTS = "LOAD_STUDENTS";
const CREATE_STUDENT = "CREATE_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";

const LOAD_UNIVERSITIES = "LOAD_UNIVERSITIES";
const CREATE_UNIVERSITY = "CREATE_UNIVERSITY";
const DELETE_UNIVERSITY = "DELETE_UNIVERSITY";

const students = (state = [], action) => {
  //TODO make switch
  if (action.type === "LOAD_STUDENTS") {
    return action.students;
  }
  if (action.type === "CREATE_STUDENT") {
    return [...state, action.student];
  }
  // if (action.type === "DELETE_STUDENT") {
  //   return state.map((student) => (student.id === action.student.id ? action.student : student));
  // }
  return state;
};

const universities = (state = [], action) => {
  //TODO make switch
  if (action.type === "LOAD_UNIVERSITIES") {
    return action.universities;
  }
  if (action.type === "CREATE_UNIVERSITY") {
    return [...state, action.university];
  }
  // if (action.type === "DELETE_STUDENT") {
  //   return state.map((university) => (university.id === action.university.id ? action.university : university));
  // }
  return state;
};

const store = createStore(
  combineReducers({
    students,
    universities,
  }),
  applyMiddleware(thunk, logger)
);

export const fetchStudents = () => {
  return async (dispatch) => {
    const { data: students } = await axios.get("/api/students");
    dispatch({
      type: LOAD_STUDENTS,
      students,
    });
  };
};

export const fetchUniversities = () => {
  return async (dispatch) => {
    const { data: universities } = await axios.get("/api/universities");
    dispatch({
      type: LOAD_UNIVERSITIES,
      universities,
    });
  };
};

export const createStudent = (student, history) => {
  return async (dispatch) => {
    const { data: newStudent } = await axios.post("/api/students", student);
    dispatch({
      type: CREATE_STUDENT,
      newStudent,
    });
    history.push("/");
  };
};

export const createUniversity = (university, history) => {
  return async (dispatch) => {
    const { data: newUniversity } = await axios.post(
      "/api/universities",
      university
    );
    dispatch({
      type: CREATE_UNIVERSITY,
      newUniversity,
    });
    history.push("/");
  };
};

export default store;
