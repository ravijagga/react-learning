import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLocation } from '../actions/location';

class Location extends Component {

  componentWillMount() {
    this.props.getLocation();
  }

  render() {
    // While getting location
    if (!this.props.location) return <div>Trying to locate you...</div>;

    // If user denied location access
    if (this.props.location.message) return <div>{this.props.location.message}</div>;

    // Save Location
    const { coords: { latitude, longitude } } = this.props.location;

    // Set Location in Dashboard component
    // this.props.setLocation({ lat: latitude, lon: longitude });

    // Print Location
    return (
      <div>
          <h3>Your Current Location:</h3>
          <div>latitude: {latitude}</div>
          <div>longitude: {longitude}</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getLocation }, dispatch);
}

function mapStateToProps(state) {
  const { location } = state;
  return { location };
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);