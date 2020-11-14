# Express Hello World Service

A simple Express-based hello world service which listens on port 3000 and returns a "Hello World" string.

## Run locally

### One time configuration

Install the required dependencies:

```
$ npm install
```

### Start the service

After running the installation the service can be started via:

```
$ npm start
```

## Run via Docker

### Build the container

To build the container start Docker and run:

```
$ docker build -t cwansart/express-hello-world .
```

### Run the container

To run the container after you built it run:

```
$ docker run --rm -p 3000:3000 cwansart/express-hello-world
```