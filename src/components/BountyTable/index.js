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
    return `<a data-bountyId='${cell}' href="#"><i class='icon-moneybag' aria-hidden='true' alt='Claim'></i></a>
<a data-bountyId='${cell}' href="#"><i class='fa fa-flag' aria-hidden='true' alt='Flag'></i></a>`;
  }

  render() {
    return (
      <BootstrapTable data={ this.state.data } insertRow={true} striped hover>
      <TableHeaderColumn isKey dataField="date">Date</TableHeaderColumn>
      <TableHeaderColumn dataField="title" columnClassName="BountyTable-nameColumn">Name</TableHeaderColumn>
      <TableHeaderColumn dataField="description" columnClassName="BountyTable-descriptionColumn">Descr</TableHeaderColumn>
      <TableHeaderColumn dataField="price" columnClassName="BountyTable-priceColumn">Price</TableHeaderColumn>
      <TableHeaderColumn dataField="claim" columnClassName="BountyTable-claimColumn">Claims</TableHeaderColumn>
      <TableHeaderColumn dataField="review" columnClassName="BountyTable-reviewColumn">Reviewing</TableHeaderColumn>
      <TableHeaderColumn dataField="tools" columnClassName="BountyTable-toolsColumn">Resources</TableHeaderColumn>
      <TableHeaderColumn dataField="id" columnClassName="BountyTable-actionsColumn" dataFormat={ this.actionFormatter }>Actions</TableHeaderColumn>
      </BootstrapTable>
    );

  }
}
