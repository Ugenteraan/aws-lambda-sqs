'use strict';

module.exports.testing = async (event) => {

	console.log(event);
	console.log(event.Records);
	console.log(event.Records[0].body);
	
  return {

    statusCode: 200,
    body: JSON.stringify({
      message: 'This is to return the http/https request',
      input: event,
    }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
