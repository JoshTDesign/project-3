import {Component} from 'react';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl'; 
import "./style.css"

// tslint:disable-next-line:no-var-requires
const { token, styles } = require('./config.json');
// tslint:disable-next-line:no-var-requires
const geojson = require('./geojson.json');
const Amadeus = require ("amadeus");

const amadeus = new Amadeus({
  clientId: "Da21Ae2eHv9GeCs1AfSbCzbNHWp0ArNW",
  clientSecret: "5w5HxeLoEQzzxcdC",
});

const Map = ReactMapboxGl({ accessToken: token });

const mapStyle = {
  flex: 1
};

const symbolLayout = {
  'text-field': '{place}',
  'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
  'text-offset': [0, 0.6],
  'text-anchor': 'top'
};
const symbolPaint = {
  'text-color': 'white'
};

const circleLayout = { visibility: 'visible' };
const circlePaint = {
  'circle-color': 'white'
};
class GeoJsonLayer extends Component {

  // tslint:disable-next-line:no-any
  onClickCircle = (evt) => {
    console.log(evt);
  };

  // tslint:disable-next-line:no-any
  onStyleLoad = (map) => {
    const { onStyleLoad } = this.props;
    return onStyleLoad && onStyleLoad(map);
  };

  render() {
    return (
      <Map
        style={styles.outdoor}
        center={[this.props.lon, this.props.lat]}
        containerStyle={mapStyle}
        onStyleLoad={this.onStyleLoad}
      >
        <GeoJSONLayer
          data={geojson}
          circleLayout={circleLayout}
          circlePaint={circlePaint}
          circleOnClick={this.onClickCircle}
          symbolLayout={symbolLayout}
          symbolPaint={symbolPaint}
        />
      </Map>
    );
  }
}

export default GeoJsonLayer;
