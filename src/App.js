import React from "react";

class Controlled extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: ""
    };
  }

  render() {
    const { firstName } = this.state;
    return (
      <div>
        First Name:
        <input
          value={firstName}
          onChange={(e) => this.setState({ firstName: e.target.value })}
        />
        <NonControlled />
      </div>
    );
  }
}

class NonControlled extends React.Component {
  constructor() {
    super();
    this.lastName = React.createRef();
  }
  setLastName = (e) => {
    console.log(e);
  };
  render() {
    // const { lastName } = this.props;
    return (
      <div>
        Last Name:
        <input
          ref={this.lastName}
          onChange={(e) => this.setLastName(e.target.value)}
        />
      </div>
    );
  }
}

export default Controlled;
