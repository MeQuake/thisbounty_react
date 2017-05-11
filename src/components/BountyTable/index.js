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

  nameFormatter(cell, row) {
    return `<div><a data-bountyId='${row.id}' href="#"><i class='fa fa-bookmark' aria-hidden='true' alt='Bookmark'></i></a>&nbsp;<a href="#">${cell}</a></div>
<div class="tags">
  <div class="tag">
    <i class="fa fa-money"></i>Paid
  </div>

  <div class="tag">
    <i class="fa fa-user"></i>Member
  </div>
</div>
    `;
  }

  priceFormatter(cell) {
    return `&#36;${cell}`
  }

  actionFormatter(cell) {
    return `<a data-bountyId='${cell}' href="#"><i class='fa fa-close' aria-hidden='true' alt='Delete'></i></a>
<a data-bountyId='${cell}' href="#"><i class='fa fa-flag' aria-hidden='true' alt='Flag'></i></a>
<a data-bountyId='${cell}' href="#"><i class='icon-moneybag' aria-hidden='true' alt='Claim'></i></a>`;
  }

  render() {
    return (
      <BootstrapTable data={ this.state.data } insertRow={true} hover tableHeaderClass="BountyTable-header" options = {{insertText:"+"}} search>
      <TableHeaderColumn isKey dataField="date" className="BountyTable-dateHeader" columnClassName="BountyTable-dateColumn">Date</TableHeaderColumn>
      <TableHeaderColumn dataField="title" className="BountyTable-nameHeader" columnClassName="BountyTable-nameColumn" dataFormat={ this.nameFormatter }>Name</TableHeaderColumn>
      <TableHeaderColumn dataField="description" className="BountyTable-descriptionHeader" columnClassName="BountyTable-descriptionColumn">Descr</TableHeaderColumn>
      <TableHeaderColumn dataField="price" className="BountyTable-priceHeader" columnClassName="BountyTable-priceColumn" dataFormat={ this.priceFormatter }>Price</TableHeaderColumn>
      <TableHeaderColumn dataField="tools" className="BountyTable-toolsHeader" columnClassName="BountyTable-toolsColumn">Resources</TableHeaderColumn>
      <TableHeaderColumn dataField="id" className="BountyTable-actionsHeader" columnClassName="BountyTable-actionsColumn" dataFormat={ this.actionFormatter }>Actions</TableHeaderColumn>
      </BootstrapTable>
    );

  }
}
