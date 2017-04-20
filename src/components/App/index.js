import React from 'react';
import TopBanner from '../TopBanner/index';
import ArrowBox from '../ArrowBox/index';
import PointsContent from '../PointsContent/index';

require('./index.css');
require('../AddBounty/index.js');

export default class AppComponent extends React.Component {
  render() {
    return (
      <section id="points">
        <TopBanner />
        <ArrowBox />
        <div id="table"></div>
        <PointsContent />
      </section>
    );
  }
}
