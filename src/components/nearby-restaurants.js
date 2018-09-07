import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNearbyRestaurants } from '../actions/restaurant';

class NearbyRestaurants extends Component {

  componentDidMount() {
    this.props.getNearbyRestaurants(this.props.lat, this.props.lon, this.refs.map);
  }

  render() {
    if (!this.props.nearbyRestaurants) {
      return (
        <div>
          <div ref="map" className="map"></div>
        </div>
      );
    }

    // Create table rows for nearby restaurants
    let nearbyRestaurantsOutput = this.props.nearbyRestaurants.map((value, index) => {
      return (
        <tr key={value.id}>
          <td>{index+1}</td>
          <td>{value.name}</td>
          <td>{value.vicinity}</td>
        </tr>
      );
    });

    return (
      <div>
        <div ref="map" className="map"></div>

        <h4>Nearby Restaurants sorted by distance.</h4>
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Restaurant Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {nearbyRestaurantsOutput}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getNearbyRestaurants }, dispatch);
}

function mapStateToProps(state) {
  const { nearbyRestaurants } = state;
  return { nearbyRestaurants };
}

export default connect(mapStateToProps, mapDispatchToProps)(NearbyRestaurants);