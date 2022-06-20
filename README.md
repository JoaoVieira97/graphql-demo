# GraphQL Demo

#### Description

Application developed to serve as a proof of concept for the implementation of a **GraphQL** server.

Developed using **Node.js**, **apollo-server** and **graphql-tools**.

The server offers operations (*Queries* and *Mutations*) on two different "*schemas*":
* Persons
    * Using an array ([here](src/datasources/persons-db.js)) and interacting with it to simulate the access to a database
    * Operations:
        * Get the full list of persons (**getPersons** Query)
        * Get a specific person (**getPerson** Query)
        * Get the list of cars of all the persons (**getPersonsCars** Query)
        * Add a person (**addPerson** Mutation)
        * Remove a person (**removePerson** Mutation)
* Todos
    * Using `https://gorest.co.in/public/v2/todos` and `https://gorest.co.in/public/v2/todos/${id}` endpoints
    * Operations:
        * Get the full list of todos (**getTodos** Query)
        * Get a specific todo (**getTodo** Query)

You can use [this](queries.graphql) queries as an example to interact with the server with [this](queries-variables.json) variables.

**Full Schema**:
<br>
<img src="others/schema.png" width="280"/>

#### Setup

* Install dependencies
```
$ npm install
```
* Run the application
```
$ npm start
```
* Open `http://localhost:4000` on the browser and start querying the server on Apollo GraphQL Studio.
