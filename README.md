# DineSpace — Full Stack

Milestone continuation for the Smart Restaurant Table Reservation System.

## Stack
React + Vite, Node.js + Express, MongoDB/Mongoose, JWT, Socket.io, Jest/Supertest, GitHub Actions, Docker Compose.

## Run locally
1. Copy `server/.env.example` to `server/.env` and add your MongoDB URI and JWT secret.
2. `cd server` then `npm install` and `npm start`.
3. In another terminal: `cd client` then `npm install` and `npm run dev`.

## API
Auth: POST `/api/auth/register`, POST `/api/auth/login`
Restaurants: GET/POST/PUT/DELETE `/api/restaurants`
Tables: GET/POST/PUT/DELETE `/api/tables`
Reservations: GET/POST/PUT/DELETE `/api/reservations`
Health: GET `/api/health`

## Offline/client persistence
JWT and the logged-in user are kept in localStorage so the session survives a refresh. Reservation data is fetched again after refresh.

## Concurrency
Reservations carry a `version` field. An update with an old version returns HTTP 409 instead of silently overwriting a newer update.

## Real-time
Socket.io broadcasts `reservation:changed` events to connected clients.

## CI
GitHub Actions runs server tests and a client production build on push/PR.

## Docker
`docker compose up --build` starts client and server.

## Deployment
A `render.yaml` blueprint and Dockerfiles are included for deployment. Set `MONGO_URI` and `JWT_SECRET` as secret environment variables in the hosting provider. After deployment, replace the frontend API URL with the actual backend URL and record both public URLs in this README/submission.

## Project structure
- `server/` — Express REST API, JWT authentication, Mongoose models, Socket.io and server tests.
- `DineSpace/client/` — React/Vite frontend, reusable components, API client, offline reservation cache, Socket.io client and client tests.
- `.github/workflows/ci.yml` — automated server tests and client build/tests.
- `docker-compose.yml` — local full-stack orchestration.

## Testing
Server tests use Jest/Supertest. Client tests use Vitest. CI runs both on pushes and pull requests.

## API documentation
See `openapi.json` for the documented REST endpoint contract. Protected endpoints use `Authorization: Bearer <JWT>`.
