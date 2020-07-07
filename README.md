# Hello

## Install:

`npm install`

## Docker

Run:

`docker-compose -f docker-compose-dev.yml up --build`

Container access:

`docker exec -ti -u root 564172a8d480 /bin/bash`

`sequelize db:migrate --url "postgres://ashoka_user:tupass@postgres:5432/ashoka"`

## PgAdmin

Connection:

- Host name/address: 127.0.0.1
- Port: 5434
- Maintenance database: ashoka
- Username: ashoka_user
