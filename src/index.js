import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {
  state = { lat: null, lon: null, err: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          errorMessage: '',
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.lon) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat && this.state.lon) {
      return <SeasonDisplay lat={this.state.lat} lon={this.state.lon} />;
    }
    return <Spinner message="Please accept location request" />;
  }
}
ReactDOM.render(<App />, document.querySelector('#root'));
