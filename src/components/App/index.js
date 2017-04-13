import React from 'react';
import TopBanner from '../TopBanner/index';
import ArrowBox from '../ArrowBox/index';

require('./index.css');

export default class AppComponent extends React.Component {
  render() {
    return (
      <section id="points">
        <TopBanner />
        <ArrowBox />
      </section>
    );
  }
}
