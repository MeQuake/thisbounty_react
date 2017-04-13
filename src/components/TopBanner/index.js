import React from 'react';

require('./index.css');

export default class TopBanner extends React.Component {
  render() {
    return (
      <div className="top-banner">
        <div className="big icon-moneybag"></div>
        <h2 className="title">This Bounty</h2>
        <p className="desc"><a href="mailto:invite@thisbounty.com">invite@thisbounty.com</a></p>
      </div>
    );
  }
}
