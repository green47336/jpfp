import React, { Component } from "react";
import { updateUniversity } from "../store";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UpdateUniversity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      address: "",
      slogan: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async componentDidMount() {
    const { university } = this.props;
    this.setState({
      id: university.id,
      name: university.name,
      image: university.image,
      address: university.address,
      slogan: university.slogan,
    });
  }

  onChange(ev) {
    const name = ev.target.name;
    const value = ev.target.value;
    const change = {};
    change[name] = value;
    this.setState(change);
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.updateUniversity({ ...this.state });
  }
  render() {
    const { name, image, address, slogan } = this.state;
    const { handleSubmit, onChange } = this;

    return (
      <div id="update-university-form">
        <hr />
        <h3>Update University</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input name="name" value={name} onChange={onChange} />

          <label htmlFor="image">Image URL: </label>
          <input name="image" value={image} onChange={onChange} />

          <label htmlFor="address">Address </label>
          <input name="address" value={address} onChange={onChange} />

          <label htmlFor="slogan">Slogan: </label>
          <input name="slogan" value={slogan} onChange={onChange} />
          <div>
            <hr />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => ({
  updateUniversity: (university) =>
    dispatch(updateUniversity(university, history)),
});

export default connect((state) => state, mapDispatchToProps)(UpdateUniversity);
