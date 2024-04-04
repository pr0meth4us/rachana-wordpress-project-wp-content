#!/bin/bash

# Get the container ID of the running database container
CONTAINER_ID=$(docker-compose ps -q db)

# Export the updated database from the container
docker exec -i "$CONTAINER_ID" /usr/bin/mysqldump -u root --password=wordpress local > /docker-entrypoint-initdb.d/updated.sql

# Copy the updated SQL file from the container to your local machine
docker cp "$CONTAINER_ID":/docker-entrypoint-initdb.d/updated.sql ./local.sql

# Commit the updated local.sql to Git
git add local.sql
git commit -m "Update database schema and data"
git push

# Restart the containers
docker-compose down
docker-compose up -d