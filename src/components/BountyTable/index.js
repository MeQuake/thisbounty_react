import React from 'react';
import AWS from 'aws-sdk';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import {login, awsRequest} from '../../utilities/thisbountyApi/index.min';

require('./index.css');
require('./fa.min.js');
require('./fa.css');

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data : [] };
    this.getBounties();
  }

  getBounties () {
    awsRequest({
      invokeUrl:'https://oomzdxsm40.execute-api.us-east-1.amazonaws.com/dev',
      endpoint:'/bounties/',
      body:{},
      method:'GET',
      params:{},
      additionalParams:{},
    }).then((response) => {
      console.log(response);
      this.setState({
        data: response.data
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  actionFormatter(cell) {
    return `<i class='fa fa-flag' aria-hidden='true' alt='Claim' data-bountyId='${cell}'></i>`;
  }

  render() {
    return (
      <BootstrapTable data={ this.state.data } insertRow={true} striped hover>
      <TableHeaderColumn isKey dataField="date">Date</TableHeaderColumn>
      <TableHeaderColumn dataField="title">Name</TableHeaderColumn>
      <TableHeaderColumn dataField="description">Descr</TableHeaderColumn>
      <TableHeaderColumn dataField="price">Price</TableHeaderColumn>
      <TableHeaderColumn dataField="claim">Claims</TableHeaderColumn>
      <TableHeaderColumn dataField="review">Reviewing</TableHeaderColumn>
      <TableHeaderColumn dataField="tools">Resources</TableHeaderColumn>
      <TableHeaderColumn dataField="action" dataFormat={ this.actionFormatter }>Actions</TableHeaderColumn>
      </BootstrapTable>
    );

  }
}
