import React, { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
      showLines: false,
      showError: false,
    };
    this.getHeadlines = this.getHeadlines.bind(this);
  }

  componentWillMount() {
    this.getHeadlines();
  }

  getHeadlines() {
    axios.get('http://www.politifact.com/api/statements/truth-o-meter/json/?n=5')
      .then((data) => {
        console.log(data);
        this.setState({
          headlines: data,
        });
      })
      .catch((err) => {
        this.setState({
          headlines: [],
          showError: `${err.message} - Error loading headlines. Please try again.`,
        });
      })
      .then(() =>
        this.setState({
          showLines: true,
        }),
      );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="home">
          <RaisedButton
            label="REFRESH HEADLINES"
            primary
            className="fetch-button"
            onClick={this.getHeadlines}
          />
          <div className="headlines">
            {
              this.state.showLines ?
                this.state.headlines.data.map(line =>
                  (<div className="headline" key={line.statement_url}>
                    <p className="head-text">
                      {line.ruling_headline}
                    </p>
                    <img
                      className="ruling-graphic"
                      alt=""
                      src={line.ruling.canonical_ruling_graphic}
                    />
                  </div>),
                ) : null
            }
            {
              this.state.showError ?
                <p className="error-message">{this.state.showError}</p> :
                null
            }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
