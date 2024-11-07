# App

Gympass style app.

# RFs (Requisitos funcionais)

- [x] It should be possible to register
- [ ] It should be possible to authenticate
- [ ] It should be possible to get profile of a signed in user
- [ ] It should be possible to get the number of check-ins of the user
- [ ] It should be possible to get check-in history
- [ ] It should be possible to search for nearby gyms
- [ ] It should be possible to search a gym by name
- [ ] It should be possible for an user to check-in in a gym
- [ ] It should be possible to validate user check-in
- [ ] It should be possible to register a new gym
 
# RNs (Regras de negócio)

- [x] User can't register with an already used e-mail
- [ ] User can't check-in more than once a day
- [ ] User can't check-in if it isn't close enough to the gym (100 m)
- [ ] Check-in must be validated in up to 20 minutes
- [ ] Check-in must be validated by admins
- [ ] Gyms must be registered by admins

# RNFs (Requisitos não-funcionais)

- [x] User's password should be encrypted
- [ ] App data should be persisted in a PostgreSQL database
- [ ] All data lists should be organized into pages limited to 20 each
- [ ] User should be identified by a JWT (Json Web Token)

# Useful commands

- Generate prisma base files

```sh
npx prisma init
```

- Executes changes in the schema.prisma file

```sh
npx prisma generate
```

- Executes all changes and creates a migration automatically

```sh
npx prisma migrate dev
```

- Opens a localhost acess to database

```sh
npx prisma studio
```

- Executes configs from 'docker-compose.yml'. -d is a flag to not show logs

```sh
docker compose up -d 
```