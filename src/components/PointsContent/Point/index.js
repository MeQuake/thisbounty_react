import React from 'react';

export default class Point extends React.Component {
  render() {
    return (
      <li className="point">
        <div className="icon">
          <i className="fa { this.props.icon }" aria-hidden="true"></i>
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
