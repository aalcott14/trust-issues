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
  }

  getHeadlines() {
    axios.get('http://www.politifact.com/api/statements/truth-o-meter/json/?n=5')
      .then((data) => {
        console.log(data);
        this.setState({
          headlines: data,
        });
      })
      .then(() =>
        this.setState({
          showLines: true,
        }),
      );
  }

  render() {
    if (this.state.showLines) {
      return (
        <div className="Home">
          <h1 className="title">Fact check top headlines:</h1><br />
          <button className="fetchButton" onClick={this.getHeadlines}>
            Get headlines
          </button><br /><br />
          <div>
            {
              this.state.headlines.data.map(line =>
                (<span key={line.statement_url}>
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
        <h1 className="title">Fact check top headlines:</h1><br />
        <button className="fetchButton" onClick={this.getHeadlines}>
          Get headlines
        </button>
      </div>
    );
  }
}

export default Home;
