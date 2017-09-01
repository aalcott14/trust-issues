import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import './Drag.css';
import trump from '../images/trump.png';

class Drag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
    };
    this.test = this.test.bind(this);
  }

  test() {
    this.setState({
      test: 'PLEASE STAY',
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="drag">
          <div className="images">
            <img alt="" src={trump} />
          </div>
          <RaisedButton
            label="TEST BUTTON"
            primary
            className="test-button"
            onClick={this.test}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Drag;
