import AWS from 'aws-sdk';
import apigClientFactory from 'aws-api-gateway-client';
import {login, awsRequest} from '../../utilities/thisbountyApi/index.min';

/**
 * Add a bounty via remote API
 *
 */
function addBounty() {
  login().then(() => {
    const body = {
        title:document.getElementById('title').value,
        description:document.getElementById('description').value,
        price:document.getElementById('price').value,
        tools:document.getElementById('tools').value,
    };

    awsRequest({
      invokeUrl:'https://oomzdxsm40.execute-api.us-east-1.amazonaws.com/dev',
      endpoint:'/bounties/create',
      body,
      method:'POST',
      params:{},
      additionalParams:{},
    }).then((response) => {
      console.log(response);
    })
  });
}


