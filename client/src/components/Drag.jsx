import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import './Drag.css';
import trump from '../images/trump.png';
import hilary from '../images/hilary.png';
import jeff from '../images/jeff.png';
import paul from '../images/paul.png';
import elizabeth from '../images/elizabeth.png';
import bernie from '../images/bernie.png';

class Drag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false,
      buttonText: 'Show Images',
      images: [trump, hilary]
    };
    this.showImage = this.showImage.bind(this);
  }

  showImage() {
    this.setState({
      showImage: !this.state.showImage,
    });
    this.setState({
      buttonText: !this.state.showImage ? 'Hide Images' : 'Show Images',
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="drag">
          {this.state.showImage ?
            <div className="images">
              <img className="image" alt="" src={trump} />
              <img className="image" alt="" src={hilary} />
              <img className="image" alt="" src={jeff} />
              <img className="image" alt="" src={paul} />
              <img className="image" alt="" src={elizabeth} />
              <img className="image" alt="" src={bernie} />
            </div> :
            null
          }
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
