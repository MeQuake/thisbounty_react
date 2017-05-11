import AWS from 'aws-sdk';
import apigClientFactory from 'aws-api-gateway-client';
import login from '../../utilities/thisbountyApi/index.min';

/**
 * Add a bounty via remote API
 *
 */
export default function addBounty() {
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

/**
 * Make a request to an AWS gateway endpoint
 *
 * @param {Object} config Request config values: invokeUrl, endpoint, body, method, params, additionalParams
*/
function awsRequest(config) {
  return new Promise((resolve, reject) => {
    AWS.config.credentials.get(() => {
      const apigClient = apigClientFactory.newClient({
        invokeUrl: config['invokeUrl'],
        accessKey: AWS.config.credentials.accessKeyId,
        secretKey: AWS.config.credentials.secretAccessKey,
        sessionToken: AWS.config.credentials.sessionToken,
      });

      apigClient.invokeApi(config['params'], config['endpoint'], config['method'], config['additionalParams'], config['body'])
      .then((response) => {
        resolve(response);
      }).catch((response) => {
        reject(response);
      });
    });
  });
}
