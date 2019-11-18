import React from 'react';
import './App.css';
import { GoogleMaps } from './components/GoogleMaps';
import { DirectionTextField } from './components/DirectionTextField';
import { Google } from './services/Google';

const ORIGIN_INPUT_ID = 'origin';
const DESTINATION_INPUT_ID = 'destination';

class App extends React.Component {
  private googleService?: Google;

  componentDidMount() {
    this.googleService = new Google();

    this.googleService.addAutocompleteInputId(
      document.getElementById(ORIGIN_INPUT_ID) as HTMLInputElement
    );

    this.googleService.addAutocompleteInputId(
      document.getElementById(DESTINATION_INPUT_ID) as HTMLInputElement
    );
  }

  render() {
    return (
      <div className="App">
        <div>
          <DirectionTextField id={ORIGIN_INPUT_ID} label="Origin" />
          <DirectionTextField id={DESTINATION_INPUT_ID} label="Destination" />
        </div>
        <GoogleMaps elementId={'map'} />
      </div>
    );
  }
}

export default App;
