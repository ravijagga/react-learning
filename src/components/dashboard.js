import React, { Component } from 'react';
import { connect } from 'react-redux';
import Location from './location';
import Weather from './weather';
import NearbyRestaurants from './nearby-restaurants'

class Dashboard extends Component {
  render() {
    if (!this.props.location || this.props.location.message) {
      return <div><Location /></div>;
    }

    const { coords: { latitude, longitude } } = this.props.location;
    return (
      <div>
        <Location />
        <Weather lat={latitude} lon={longitude} />
        <NearbyRestaurants lat={latitude} lon={longitude} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { location } = state;
  return { location };
}

export default connect(mapStateToProps)(Dashboard);