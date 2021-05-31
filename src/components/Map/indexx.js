import * as React from "react";
import ReactMapboxGl, { GeoJSONLayer } from "react-mapbox-gl";
import * as MapboxGL from 'mapbox-gl';

const { token, styles } = require("./config.json");
  

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

const circleLayout = { visibility: "visible" };
const circlePaint = {
  'circle-color': 'white'
};

// export interface Props {
//   // tslint:disable-next-line:no-any
//   onStyleLoad?: (map: any) => any;
// }

// class GeoJsonLayer extends React.Component<Props> {
//   private center = [-77.01239, 38.91275] as [number, number];

  "use strict";
  const __extends = (this && this.__extends) || (function () {
      const extendStatics = function (d, b) {
          extendStatics = Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
              function (d, b) { for (const p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
          return extendStatics(d, b);
      };
      return function (d, b) {
          extendStatics(d, b);
          function __() { this.constructor = d; }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
  })();
  Object.defineProperty(exports, "__esModule", { value: true });
  const GeoJsonLayer = /** @class */ (function (_super) {
      __extends(GeoJsonLayer, _super);
      function GeoJsonLayer() {
          const _this = _super !== null && _super.apply(this, arguments) || this;
          _this.center = [-77.01239, 38.91275];
          return _this;
      }
      return GeoJsonLayer;
  }(React.Component));



//   // tslint:disable-next-line:no-any
//   private onClickCircle = (evt: any) => {
//     console.log(evt);
//   };

//   // tslint:disable-next-line:no-any
//   private onStyleLoad = (map: any) => {
//     const { onStyleLoad } = this.props;
//     return onStyleLoad && onStyleLoad(map);
//   };

const _this = this;
onClickCircle = function (evt) {
    console.log(evt);
};
onStyleLoad = function (map) {
    const onStyleLoad = _this.props.onStyleLoad;
    return onStyleLoad && onStyleLoad(map);
};


//   public 
  render()  
  {
    return (
      <Map
        style={styles.dark}
        center={this.center}
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

export default GeoJsonLayer;