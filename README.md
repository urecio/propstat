# Propstat

## Development tools and stack

* Node
* React
* Docker
* PostgreSQL 

## Getting Started

* Run the PostgreSQL db, with PostGIS, locally: `npm run db:build`.
* Run the Geodata API:
  - Pull England data: cd /data/nominatim && wget http://download.geofabrik.de/europe/great-britain/england/greater-london-latest.osm.pbf
  - cd nominatim && docker build -t nominatim .
  - docker run -t -v /your/path/to/the/propstat/repo/data/nominatim:/data nominatim sh /app/init.sh /data/greater-london-latest.osm.pbf postgresdata 4
  - docker run --restart=always -p 6432:5432 -p 7070:8080 -d --name nominatim -v /data/nominatim/postgresdata:/var/lib/postgresql/11/main nominatim bash /app/start.sh
  - This will get Nominatim to run exposing those 2 ports. 6432 for Postgres and 7070 for a web interface.