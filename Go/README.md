# get lib
$ go get github.com/aws/aws-lambda-go/events
$ go get github.com/aws/aws-lambda-go/lambda

# Build binary
make build

# Deploy 
sls deploy
