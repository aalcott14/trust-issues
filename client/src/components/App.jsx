import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class App extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        { children }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
