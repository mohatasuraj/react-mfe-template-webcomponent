import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 10));
  }

  render() {
    return (
      <div id="initialComp">
        <h3>React template for Micro Frontend</h3>
      </div>
    );
  }
}
