import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import store, { fetchStudents, fetchUniversities } from "./store";
import Students from "./components/Students";
import SingleStudent from "./components/SingleStudent";
import Universities from "./components/Universities";
import SingleUniversity from "./components/SingleUniversity";

//TODO break App into its own component file
class _App extends Component {
  componentDidMount() {
    this.props.fetchUniversities();
    this.props.fetchStudents();
  }
  render() {
    return (
      <Router>
        <div>
          <h1>Academic Database</h1>
          <div id="main">
            <hr />
            <nav>
              <Link to="/students">
                <button>{`Students (${this.props.students.length})`}</button>
              </Link>
              <Link to="/universities">
                <button>{`Universities (${this.props.universities.length})`}</button>
              </Link>
            </nav>
            <Switch>
              <Route exact path="/students" component={Students} />
              <Route path="/students/:id" component={SingleStudent} />
              <Route exact path="/universities" component={Universities} />
              <Route path="/universities/:id" component={SingleUniversity} />
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
