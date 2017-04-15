import React from 'react';
import Point from './Point/index';

require('./index.css');

export default class PointsContent extends React.Component {
  render() {
    return (
      <div className="points-content">
        <div className="container">
          <ul>
            <Point icon="user" title="Who" description="Programmers who need real world experience to improve their skills." />
            <Point icon="file-code-o" title="What" description="Paid projects in a variety of languages, with a fixed scope and clear direction." />
            <Point icon="laptop" title="When" description="Work at your own pace with help from experienced developers." />
            <Point icon="cloud" title="Where" description="All remote. Communicate via Slack. Contribute through GitHub and CodePen." />
            <Point icon="fork" title="Why" description="Motivate yourself to increase skills with real world projects." />
            <Point icon="comment" title="How" description="Request an invite:" />
          </ul>
        </div>
      </div>
    );
  }
}
