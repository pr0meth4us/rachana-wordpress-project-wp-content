#!/bin/bash

# Get the container ID of the running database container

# Export the updated database from the container
docker compose exec db mariadb-dump -u wordpress -pwordpress local > ./local.sql

# Copy the updated SQL file from the container to your local machine
