# Holiday Management

### Setup

- Install all dependencies using `npm install`
- Create a copy of environment file by running `cp .env.sample .env` and set up accordingly
- Make sure to install Docker Desktop. Run command `docker compose up -d` to run the database service locally
- To initialize the schema of database, run `npm run db:up`. This will run the migration and seeds.
- Start the application using the command `npm start`
- To run in dev mode, you may use the command `npm run start:dev`