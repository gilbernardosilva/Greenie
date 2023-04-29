import React, { Component } from 'react';

class App extends Component {
  state = {
    day: null
  };
  componentDidMount() {
    fetch('/api/day')
      .then(response => response.json())
      .then(data => this.setState({ day: data }));
  }
  render() {
    const { day } = this.state;
    return (
      <div>
          <p>Today is arroz {day}</p>
      </div>
    );
  }
}

export default App;
