import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          errorMessage: '',
        });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.lon) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat && this.state.lon) {
      return (
        <div>
          Latitude: {this.state.lat}
          <br />
          Longitude: {this.state.lon}
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
