import React from 'react';
import PropTypes from 'prop-types';
import { Service } from './service';
import './styles.css';

const ELEMENT_ID = 'map';

export class GoogleMaps extends React.Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new Service(ELEMENT_ID);
  }

  render() {
    return (
      <div id="map-container">
        <div id={ELEMENT_ID}></div>
      </div>
    );
  }
}
