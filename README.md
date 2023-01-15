# fktr1L

## **Get Started**

### _If u have docker & docker-compose installed_

`docker-compose up -d --build`

You will have the server running on http://localhost:3001/ and
the app on http://localhost:3000/

If u have any problem running on those ports, try `docker rm -f $(docker ps -aq)`
and then `docker-compose up -d --build` again

### _If u DON'T have docker & docker-compose installed_

1. go to `root > front` and `npm start`, then
2. go to `root > metrics-service` and `npm start`

You will have the server running on http://localhost:3001/ and the app on http://localhost:3000/
