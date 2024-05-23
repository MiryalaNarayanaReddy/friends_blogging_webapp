#!/bin/bash

# This script is used to run the backend server

npm install 
npx prisma migrate deploy
npx prisma generate
npm start
