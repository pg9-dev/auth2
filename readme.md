# Description

---

Auth2 is a backend authentication server exposing a GraphQL API to requesting clients.

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
