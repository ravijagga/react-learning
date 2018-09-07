import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions/weather';

class Weather extends Component {

  componentWillMount() {
    this.props.getWeather(this.props.lat, this.props.lon);
  }

  render() {
    const weather = this.props.weather;

    // While fetching Weather
    if (!weather) return <div>Loading Weather Data...</div>;

    // Print Weather
    return (
      <div>
          <h4>Weather Details of your Location:</h4>
          <ul>
            <li>Location: { weather.data.name  }, { weather.data.sys.country }</li>
            <li>Temperature: { weather.data.main.temp }&deg;C</li>
          </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getWeather }, dispatch);
}

function mapStateToProps(state) {
  const { weather } = state;
  return { weather };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);