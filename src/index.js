import React from "react";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import store, { fetchStudents, fetchUniversities } from "./store";
import Students from "./Students";
import Universities from "./Universities";

class _App extends Component {
  componentDidMount() {
    this.props.fetchStudents();
    this.props.fetchUniversities();
  }
  render() {
    const { students, universities } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <div id="home">
          <hr />
          <Students />
          <Universities />
        </div>
      </div>
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
