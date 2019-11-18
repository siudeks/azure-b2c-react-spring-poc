# Azure B2C + React + Spring POC
Simple repo to show identification and authorisation with ReactJS and Azure B2C

## How to run
**Frontend:** `npm start`

**Backend ("myservice" - GraphQL):** `mvn spring-boot:run`

## How to configure
**Frontend:** Configuration values are stored in `.env` file. If you prefer to override them without do any changes to orginal file create `.env.local` file and use own values there.


## Usefull commands:
**Frontend:**
 - `npm run compile-login-sass` compiles sass files to css files for login page (login page is separte from react project due to using Azure B2C)
