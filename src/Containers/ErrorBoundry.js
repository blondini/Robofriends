import React, {Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      HasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({HasError: true})
  }

  render() {
    if (this.state.HasError) {
      return <h1>Oooops. That is not good!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry;
