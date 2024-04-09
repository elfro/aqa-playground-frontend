The AQA Playground is a comprehensive testbed designed primarily for passionate SDETs to practice their skills in real-world scenarios.

Here you can find the Frontend part of this project.

Backend part can be found in [aqa-playground repo](https://github.com/elfro/aqa-playground.git). This is the fork of the original implementation by [@sskorol](https://github.com/sskorol/aqa-playground).

## Tech Stack

- React
- Next.js (App router)
- styled-components

## System requirements

- npm 9.6.x and above

- Node.js 20.x and above.

## Getting Started

1. Clone the project

```bash
git@github.com:elfro/aqa-playground-frontend.git && cd aqa-playground-frontend
```

2. Install all dependencies

```bash
npm ci
```

3. Add environment variables

```bash
cp .env.local.template .env.local
```

You can use the following values:

```.dotenv
BE_URL=http://localhost:9090
NEXTAUTH_SECRET=aqasecret
NEXT_PUBLIC_URL=http://localhost:3000
```

###### Note: such values shouldn't be exposed in the real application.

4. Start the server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

6. To run production build:

```bash
npm run build && npm run start
```

## How to quickly run backend:

1. Make sure Docker is installed.
2. Clone the project - [Git repo](git@github.com:elfro/aqa-playground.git):

```bash
git clone git@github.com:elfro/aqa-playground.git && cd aqa-playground
```

3. Add environment variables by following instructions here: [backend config](https://github.com/elfro/aqa-playground/tree/main?tab=readme-ov-file#backend-config).
4. Create and start containers using `docker-compose.backend.dev.yml` file:

```bash
docker compose -f docker-compose.backend.dev.yml up --detach
```

It will run up Postgres DB, pgadmin and Backend service. To check, if it's working, open Swagger interface http://localhost:9090/api.

## TODO

- [x] not found
- [x] loading state for Products Grid, details produces page
- [ ] notifications - toaster
- [ ] unit tests
- [ ] extract h1-h3, p into the separate ui components
- [ ] sign up page
- [ ] checkout wizard + payment
- [ ] update readme
- [ ] sitemap
