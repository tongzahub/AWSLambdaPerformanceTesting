const AWS = require('aws-sdk')
AWS.config.update({region: 'ap-southeast-1'});
function invokeCsharp (lambda){

    var params = {
        FunctionName: 'arthit-aws-csharp-dev-hello', /* required */
      };
      lambda.invoke(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });

}

function invokeRuby (lambda){

    var params = {
        FunctionName: 'arthit-aws-ruby-dev-hello', /* required */
      };
      lambda.invoke(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });

}


function invokePython(lambda){

    var params = {
        FunctionName: 'arthit-aws-python3-dev-hello', /* required */
      };
      lambda.invoke(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });

}

function invokeNodejs (lambda){

    var params = {
        FunctionName: 'arthit-aws-nodejs-dev-hello', /* required */
      };
      lambda.invoke(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });

}

function invokeJava (lambda){

    var params = {
        FunctionName: 'arthit-aws-java-maven-dev-hello', /* required */
      };
      lambda.invoke(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });

}


function invokeGo (lambda){

    var params = {
        FunctionName: 'arthit-aws-go-dev-hello', /* required */
      };
      lambda.invoke(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });

}



function main (){


    var lambda = new AWS.Lambda();
    for (let index = 0; index < 100; index++) {
        
        invokeCsharp(lambda);
        invokeRuby(lambda);
        invokePython(lambda);
        invokeNodejs(lambda);
        invokeJava(lambda);
        invokeGo(lambda);
    }

   
}

main()