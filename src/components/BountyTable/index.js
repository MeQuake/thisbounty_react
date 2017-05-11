import React from 'react';
import AWS from 'aws-sdk';
import apigClientFactory from 'aws-api-gateway-client';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import InsertModal from './InsertModal/index';

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
    const apigClient = apigClientFactory.newClient({
      invokeUrl: 'https://oomzdxsm40.execute-api.us-east-1.amazonaws.com/dev'
    });
    const params = {
    };

    apigClient.invokeApi(params, '/bounties', 'GET')
    .then((result) => {
      this.setState({
        data: result.data
      });
    }).catch((response) => {
    });
  }

  actionFormatter(cell) {
    return `<i class='fa fa-flag' aria-hidden='true' alt='Claim' data-bountyId='${cell}'></i>`;
  }

  createCustomInsertButton = (onClick) => {
    return (
      <InsertButton
      btnText='Insert'
      className='table-insert-bounty'
      style={{display:'none'}}/>
    );
  }

  render() {
    const options = {
      insertBtn: this.createCustomInsertButton
    };
    return (
      <BootstrapTable data={ this.state.data } options={ options } insertRow striped hover>
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
