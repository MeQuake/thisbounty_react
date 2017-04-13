import React from 'react';
var FontAwesome = require('react-fontawesome');

export default class Point extends React.Component {
  render() {
    return (
      <li className="point">
        <div className="icon">
          <FontAwesome name={ this.props.icon } />
        </div>
        <div className="divider"></div>
        <div className="content">
          <h5 className="point-title">{ this.props.title }</h5>
          <p className="point-desc">{ this.props.description }</p>
        </div>
      </li>
    );
  }
}
