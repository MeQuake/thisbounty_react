import React from 'react';
import TopBanner from '../TopBanner/index';

require('./index.css');

export default class AppComponent extends React.Component {
  render() {
    return (
      <section id="points">
        <TopBanner />
      </section>
    );
  }
}
