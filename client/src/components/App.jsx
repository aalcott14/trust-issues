import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            title={<Link to="/">Home</Link>}
          />
          {/* <Link to="/about">About</Link> */}

          { children }
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
