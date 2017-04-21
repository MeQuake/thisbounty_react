import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

require('./index.css');
require('./fa.min.js');
require('./fa.css');

const bounty = [
  {
    date: '17-Apr-2017 20:41 EST',
    name: 'thisbounty.com -- Login',
    descr: 'Try using this for FB login: https://www.npmjs.com/package/cognito-helper',
    price: '$25.00',
    claim: '0',
    review: '0',
    resources: '<i class="fa fa-github" aria-hidden="true"></i>',
    action: '',
  },
];

function actionFormatter(cell) {
  return `<i class='fa fa-flag' aria-hidden='true' alt='Claim' data-bountyId='${cell}'></i>`;
}

export default class BountyTable extends React.Component {
  render() {
    return (
      <BootstrapTable data={bounty} insertRow={false} striped hover>
        <TableHeaderColumn isKey dataField="date">Date</TableHeaderColumn>
        <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
        <TableHeaderColumn dataField="descr">Descr</TableHeaderColumn>
        <TableHeaderColumn dataField="price">Price</TableHeaderColumn>
        <TableHeaderColumn dataField="claim">Claims</TableHeaderColumn>
        <TableHeaderColumn dataField="review">Reviewing</TableHeaderColumn>
        <TableHeaderColumn dataField="resource">Resources</TableHeaderColumn>
        <TableHeaderColumn dataField="action" dataFormat={ actionFormatter }>Actions</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
