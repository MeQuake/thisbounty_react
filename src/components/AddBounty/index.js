import AWS from 'aws-sdk';
import apigClientFactory from 'aws-api-gateway-client';
import login from '../../utilities/thisbountyApi/index.min';

function addBounty() {
  login().then(() => {
    const result = document.getElementById('result');
    result.innerHTML = '';
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const tools = document.getElementById('tools').value;

    AWS.config.credentials.get(() => {
      const apigClient = apigClientFactory.newClient({
        invokeUrl: 'https://oomzdxsm40.execute-api.us-east-1.amazonaws.com/dev',
        accessKey: AWS.config.credentials.accessKeyId,
        secretKey: AWS.config.credentials.secretAccessKey,
        sessionToken: AWS.config.credentials.sessionToken,
      });
      const params = {
      };

      const body = {
        title,
        description,
        price,
        tools,
      };

      const additionalParams = {
      };

      apigClient.invokeApi(params, '/bounties/create', 'POST', additionalParams, body)
      .then(() => {
        result.innerHTML = 'Bounty has been successfuly added.';
      }).catch((response) => {
        result.innerHTML = `Something went wrong, bounty has not been added.<br> ${response.data}`;
      });
    });
  });
}

addBounty();
