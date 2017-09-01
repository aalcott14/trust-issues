import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import './Drag.css';
import trump from '../images/trump.png';

class Drag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false,
      buttonText: 'Show Image',
    };
    this.showImage = this.showImage.bind(this);
  }

  showImage() {
    this.setState({
      showImage: !this.state.showImage,
    });
    this.setState({
      buttonText: !this.state.showImage ? 'Hide Image' : 'Show Image',
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="drag">
          <div className="images">
            {this.state.showImage ?
              <img alt="" src={trump} /> :
              null
            }
          </div>
          <RaisedButton
            label={this.state.buttonText}
            primary
            className="test-button"
            onClick={this.showImage}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Drag;
