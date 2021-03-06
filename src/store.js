import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

const socket = new WebSocket(window.location.origin.replace("http", "ws"));
socket.addEventListener("message", (ev) => {
  const action = JSON.parse(ev.data);
  store.dispatch(action);
});

const LOAD_STUDENTS = "LOAD_STUDENTS";
const CREATE_STUDENT = "CREATE_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";
const UPDATE_STUDENT = "UPDATE_STUDENT";

const LOAD_UNIVERSITIES = "LOAD_UNIVERSITIES";
const CREATE_UNIVERSITY = "CREATE_UNIVERSITY";
const DELETE_UNIVERSITY = "DELETE_UNIVERSITY";
const UPDATE_UNIVERSITY = "UPDATE_UNIVERSITY";

const students = (state = [], action) => {
  //TODO make switch
  if (action.type === "LOAD_STUDENTS") {
    return action.students;
  }
  if (action.type === "CREATE_STUDENT") {
    return [...state, action.newStudent];
  }
  if (action.type === "DELETE_STUDENT") {
    return state.filter((student) => student.id !== action.id);
  }
  if (action.type === "UPDATE_STUDENT") {
    return state.map((student) => {
      return student.id === action.updatedStudent.id
        ? action.updatedStudent
        : student;
    });
  }
  return state;
};

const universities = (state = [], action) => {
  //TODO make switch
  if (action.type === "LOAD_UNIVERSITIES") {
    return action.universities;
  }
  if (action.type === "CREATE_UNIVERSITY") {
    return [...state, action.newUniversity];
  }
  if (action.type === "DELETE_UNIVERSITY") {
    return state.filter((university) => university.id !== action.id);
  }
  if (action.type === "UPDATE_UNIVERSITY") {
    return state.map((university) =>
      university.id === action.updatedUniversity.id
        ? action.updatedUniversity
        : university
    );
  }
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
    socket.send(
      JSON.stringify({
        type: CREATE_STUDENT,
        newStudent,
      })
    );
    dispatch({
      type: CREATE_STUDENT,
      newStudent,
    });
    history.push(`/students/${newStudent.id}`);
  };
};

export const createUniversity = (university, history) => {
  return async (dispatch) => {
    const { data: newUniversity } = await axios.post(
      "/api/universities",
      university
    );
    socket.send(
      JSON.stringify({
        type: CREATE_UNIVERSITY,
        newUniversity,
      })
    );
    dispatch({
      type: CREATE_UNIVERSITY,
      newUniversity,
    });
    history.push(`/universities/${newUniversity.id}`);
  };
};

export const deleteStudent = (id, history) => {
  return async (dispatch) => {
    await axios.delete(`/api/students/${id}`);
    socket.send(
      JSON.stringify({
        type: DELETE_STUDENT,
        id: id * 1,
      })
    );
    dispatch({
      type: DELETE_STUDENT,
      id: id * 1,
    });
  };
};

export const deleteUniversity = (id, history) => {
  return async (dispatch) => {
    await axios.delete(`/api/universities/${id}`);
    socket.send(
      JSON.stringify({
        type: DELETE_UNIVERSITY,
        id: id * 1,
      })
    );
    dispatch({
      type: DELETE_UNIVERSITY,
      id: id * 1,
    });
  };
};

export const updateStudent = (student, history) => {
  return async (dispatch) => {
    const { data: updatedStudent } = await axios.put(
      `/api/students/${student.id}`,
      student
    );
    socket.send(
      JSON.stringify({
        type: UPDATE_STUDENT,
        updatedStudent,
      })
    );
    dispatch({
      type: UPDATE_STUDENT,
      updatedStudent,
    });
  };
};

export const updateUniversity = (university, history) => {
  return async (dispatch) => {
    const { data: updatedUniversity } = await axios.put(
      `/api/universities/${university.id}`,
      university
    );
    socket.send(
      JSON.stringify({
        type: UPDATE_UNIVERSITY,
        updatedUniversity,
      })
    );
    dispatch({
      type: UPDATE_UNIVERSITY,
      updatedUniversity,
    });
  };
};

export default store;
