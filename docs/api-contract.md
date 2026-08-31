# DineSpace REST API Contract – Milestone 2

Base URL: `http://localhost:5000/api`

## Authentication
- `POST /auth/register` — body `{ fullName, email, password }`
- `POST /auth/login` — body `{ email, password }`; returns JWT and user
- Protected requests use `Authorization: Bearer <token>`.

## Restaurants
- `GET /restaurants` — list active restaurants; optional `?search=`
- `GET /restaurants/:id` — restaurant details
- `POST /restaurants` — admin; create restaurant
- `PUT /restaurants/:id` — admin; update restaurant
- `DELETE /restaurants/:id` — admin; deactivate restaurant

## Reservations
- `POST /reservations` — authenticated customer; create reservation
- `GET /reservations/mine` — authenticated customer; list own reservations
- `PATCH /reservations/:id/cancel` — authenticated customer; cancel own reservation
- `GET /reservations` — admin; list all reservations
- `PATCH /reservations/:id` — admin; update reservation status

## Error format
Errors return JSON such as `{ "message": "Description" }` with an appropriate HTTP status.
