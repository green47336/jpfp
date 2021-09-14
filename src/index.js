import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import store, { fetchStudents, fetchUniversities } from "./store";
import Students from "./components/Students";
import Universities from "./components/Universities";

//TODO break App into its own component file
class _App extends Component {
  componentDidMount() {
    this.props.fetchStudents();
    this.props.fetchUniversities();
  }
  render() {
    return (
      <Router>
        <div>
          <h1>Campus Info</h1>
          <div id="main">
            <hr />
            <nav>
              <Link to="/students">
                <button>{`Students (${this.props.students.length})`}</button>
              </Link>
              <Link to="/universities">
                <button>{`Campuses (${this.props.universities.length})`}</button>
              </Link>
            </nav>
            <Switch>
              <Route path="/students" component={Students} />
              <Route path="/universities" component={Universities} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const App = connect(
  (state) => state,
  (dispatch) => {
    return {
      fetchStudents: () => dispatch(fetchStudents()),
      fetchUniversities: () => dispatch(fetchUniversities()),
    };
  }
)(_App);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
