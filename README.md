# CGDS-Wordpress-Theme

A demo for apply CGDS on Wordpress theme.

## Installation


With Docker installed and running, in Terminal:

````
cd cgds-wordpress-theme
````

Then: (add sudo if linux)

````
docker compose up -d
````

Then in your browser:
````
http://localhost:10033/
````

(you might encounter database connection error, just wait for a while for the queries to be executed and refresh the page and it should work)

also a common problem faced by linux is the permission issue, to fix it run the following command:

```` 
chmod -R 777 . 
````


