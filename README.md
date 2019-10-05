# gRPC Server and Client app in node js

gRPC is a modern, open source, high-performance remote procedure call (RPC) framework that can run anywhere. gRPC enables client and server applications to communicate transparently, and simplifies the building of connected systems.

gRPC also supports many other features such as authentication, bidirectional steaming, flow control, bindings, cancellation, and timeouts that we will explore further. It is more compact than JSON and converts nicely to the native language data type using the Protocol Buffer compiler.

## What we will build

We will build a simple gRPC Server with node.js that provides services that provide the create, read, update, delete method for Note app. We also will create gRPC node.js Client that calls the method from the gRPC server.


## Create NPM Project and Add Dependencies

	npm install --save grpc
	npm install --save uuid	


## Still look wrong? 

Contact the developer and tell me what you tried to do that didn’t work.

- [Reporting an issue](https://github.com/vickymax/django-test-driven-development/issues/new).