using Amazon.Lambda.Core;
using System;

[assembly:LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace AwsDotnetCsharp
{
    public class Handler
    {
        public Response Hello()
        {
             LambdaLogger.Log("hello world");
           return new Response(null);
        
        }
    }

     public class Response
    {
      public string Message {get; set;}
   
      public Response(string message){
        
        Message = message;
      
      }
    }
}
