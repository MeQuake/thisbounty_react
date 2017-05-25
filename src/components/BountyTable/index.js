import React from 'react';
import AWS from 'aws-sdk';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import InsertModal from './InsertModal/index';
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
    return `<div><a data-bountyId='${row.id}' href="#"><i class='fa fa-bookmark' aria-hidden='true' alt='Bookmark'></i></a>&nbsp;<a href="#">${cell}</a></div>`;
  }

  toolsFormatter(cell) {
    return `<div class="tags">
      <div class="tag">
        <i class="fa fa-money"></i>Paid
      </div>

      <div class="tag">
        <i class="fa fa-user"></i>Member
      </div>
    </div>`;
  }

  priceFormatter(cell) {
    return `&#36;${cell}`
  }

  actionFormatter(cell) {
    return `<a data-bountyId='${cell}' href="#"><i class='fa fa-close' aria-hidden='true' alt='Delete'></i></a>
<a data-bountyId='${cell}' href="#"><i class='fa fa-flag' aria-hidden='true' alt='Flag'></i></a>
<a data-bountyId='${cell}' href="#"><i class='icon-moneybag' aria-hidden='true' alt='Claim'></i></a>`;
  }

  onAfterInsertRow(row) {
    let newRowStr = '';

    console.log(row);
    newRowStr += 'Name' + ': ' + row.title + ' \n';
    newRowStr += 'Description' + ': ' + row.description + ' \n';
    newRowStr += 'Price' + ': ' + row.price + ' \n';
    newRowStr += 'Resources' + ': ' + row.tools + ' \n';
  }
  /*
  Returns current date in US format
  */
  getCurrentDate() {
    /*
    Much simpler way is to just use
    return new Date().toISOString().slice(0, 10);
    but the example of it is: 2017-05-25
    */
    let dateString = "";
    let date = new Date();
    dateString += (date.getMonth() + 1) + '.';
    dateString += date.getDate() + ".";
    dateString += date.getFullYear();
    return dateString;
  }

  render() {
    const options = {
      insertText: "+",
      afterInsertRow: this.onAfterInsertRow
    };

    return (
      <BootstrapTable data={ this.state.data } insertRow hover tableHeaderClass="BountyTable-header" options={ options } search>
      <TableHeaderColumn hiddenOnInsert isKey dataField="date" autoValue={ this.getCurrentDate } className="BountyTable-dateHeader" columnClassName="BountyTable-dateColumn">Date</TableHeaderColumn>
      <TableHeaderColumn dataField="title" className="BountyTable-nameHeader" columnClassName="BountyTable-nameColumn" dataFormat={ this.nameFormatter }>Name</TableHeaderColumn>
      <TableHeaderColumn dataField="description" className="BountyTable-descriptionHeader" columnClassName="BountyTable-descriptionColumn">Descr</TableHeaderColumn>
      <TableHeaderColumn dataField="price" className="BountyTable-priceHeader" columnClassName="BountyTable-priceColumn" dataFormat={ this.priceFormatter }>Price</TableHeaderColumn>
      <TableHeaderColumn dataField="tools" className="BountyTable-toolsHeader" columnClassName="BountyTable-toolsColumn" dataFormat={ this.toolsFormatter }>Resources</TableHeaderColumn>
      <TableHeaderColumn hiddenOnInsert dataField="id" className="BountyTable-actionsHeader" columnClassName="BountyTable-actionsColumn" dataFormat={ this.actionFormatter }>Actions</TableHeaderColumn>
      </BootstrapTable>
    );

  }
}
