import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: [],
      showLines: false,
    };
    this.getHeadlines = this.getHeadlines.bind(this);
    this.showHeadlines = this.showHeadlines.bind(this);
  }


  componentWillMount() {
    this.getHeadlines();
  }

  getHeadlines() {
    axios.get('http://www.politifact.com/api/statements/truth-o-meter/json/?n=5')
      .then((data) => {
        this.setState({
          headlines: data,
        });
      });
  }

  showHeadlines() {
    this.setState({
      showLines: true,
    });
  }

  render() {
    if (this.state.showLines) {
      return (
        <div className="Home">
          <h1>Check top headlines:</h1>
          <button onClick={this.showHeadlines}>
            Get headlines
          </button>
          <div>
            {
              this.state.headlines.data.map(line =>
                (<span>
                  <a href={line.statement_url}>
                    {line.ruling_headline}
                  </a><br />
                </span>),
              )
            }
          </div>
        </div>
      );
    }
    return (
      <div className="Home">
        <h1>Check top headlines:</h1>
        <button onClick={this.showHeadlines}>
          Get headlines
        </button>
      </div>
    );
  }
}

export default Home;
