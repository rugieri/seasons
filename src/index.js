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
        });
      },
      (err) => console.log(err)
    );
  }

  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Longitude: {this.state.lon}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
