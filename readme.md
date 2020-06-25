# Description

---

Auth2 is a backend authentication server exposing a GraphQL API to requesting clients. It uses jwt tokens to authenticate users and keep them logged in.

# Instructions to run

---

This project is packaged via npm; the respective package.json file contains all required scripts.

> For convenience, `.env` file is attached with the repository and the database configuration are already in place. Not recommended for production.

In order to the run the project, first the dependencies need to be installed.

---

To install all dependencies:

```
    `yarn install` or `npm install`
```

---

To start the server:

```
    `yarn start` or `npm start`
```

---

The project expects a postgresql database server at port `5432` with the appropriate configuration; failure to find a database-server would cause the server to throw an error. Refer to the `ormconfig.json` for details on configuration. Any changes in database configuration must be corresponded by changes in the `ormconfig.json` file.

If database configurations are met then the server will launch at `localhost:8000/graphql`. The project is ran via `nodemon`, any changes in the files would cause the server to restart for faster dev. experience.

# Database Schema

![UserModel](https://i.ibb.co/9W1MhsR/User-Model-1.jpg)

#### User Model

A simplistic model for user to illustrate the authentication example.

# Graph QL API: types, mutation and queries

#### Types

---

```graphql
LoginResponse {
  accessToken: String!
  user: User!
}
```

```graphql
User {
  id: Int!
  email: String!
}
```

#### Mutations

---

```graphql
Mutation {
  register(password: String!, email: String!): Boolean!
  login(password: String!, email: String!): LoginResponse!
  revokeRefreshTokenForUser(userId: Int!): Boolean!
  logout: Boolean!
}
```

#### Queries

---

```graphql
Query {
  hello: String!
  bye: String!
  users: [User!]!
  me: User
}
```

# Example API requests

#### Registration

Registering an user with a sample email and password.

```graphql
mutation registerUser {
  register(email: "hobby@gmail.com", password: "userPassword")
}
```

#### Login

Logging in an user and returning accessToken for further requests.

```graphql
mutation login {
  login(email: "hobby@gmail.com", password: "userPassword") {
    accessToken
  }
}
```

# Acknowledgement

This project is based on tutorials by youtuber Ben Awad. Here is a link to Ben's channel:https://www.youtube.com/user/99baddawg; like, share and follow his channel if you appreciate the content.
