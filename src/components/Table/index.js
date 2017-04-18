import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

require('./index.css');
require('./fa.min.js');

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

export { BootstrapTable, TableHeaderColumn, bounty, actionFormatter };
