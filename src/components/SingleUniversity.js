import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const _SingleUniversity = ({ students, universities, history, match }) => {
  //Ensures we don't crash on a hard reload
  if (students.length === 0 || universities.length === 0) {
    return "Loading...";
  }

  const theUniversity = universities.find(
    (university) => university.id === match.params.id * 1
  );
  const theStudent = students.find(
    (student) => student.id === theUniversity.id
  );

  return (
    <div id="single-university-module">
      <p>Details for {theUniversity.name}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const SingleUniversity = connect(
  mapStateToProps,
  mapDispatchToProps
)(_SingleUniversity);

export default SingleUniversity;
