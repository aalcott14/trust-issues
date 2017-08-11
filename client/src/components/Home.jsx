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
    return (
      <div className="Home">
        <h1 className="title">Fact check top headlines:</h1><br />
        <button className="fetchButton" onClick={this.getHeadlines}>
          Get headlines
        </button><br /><br />
        <div className="headlines">
          {this.state.showLines ?
            this.state.headlines.data.map(line =>
              (<div key={line.statement_url}>
                {line.ruling_headline}<br />
                <img className="ruling-graphic" alt="" src={line.ruling.canonical_ruling_graphic} />
              </div>),
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default Home;
