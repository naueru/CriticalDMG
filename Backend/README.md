
# criticaldmg -Backend

> 

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting started

You can run this project with docker without installing any dependencies, only [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
```
docker-compose build
```
and
```
docker-compose up
```
This last commands start the server in the port set on the .env file. 
This docker configuration is intended to be temporal, as this is a prototype we don't want to install dependencies on our computer that we don't know if we're going to use. In any case if we choose to work based on this prototype we can work to improve our docker configuration or just install the dependencies.

## Original Getting Started 

1. Make sure you have [NodeJS](https://nodejs.org/), [npm](https://www.npmjs.com/) and mongo installed.
2. Install your dependencies

    ```
    cd path/to/criticaldmg
    npm install
    ```
3. Install and configure Mongo
4. Set Mongo variables on the code
5. Start your app

    ```
    npm start
    ```

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

