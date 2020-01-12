echo "started"
ogr2ogr -f GeoJSON -t_srs crs:84 "/data/flood3.geojson" "/data/flood3/data/Flood_Map_for_Planning_Rivers_and_Sea_Flood_Zone_3.shp"
echo "flood3 geojson created"
ogr2ogr -f GeoJSON -t_srs crs:84 "/data/flood2.geojson" "/data/flood2/data/Flood_Map_for_Planning_Rivers_and_Sea_Flood_Zone_2.shp"
echo "flood2 geojson created"
ogr2ogr -f "PostgreSQL" PG:"dbname=propstat host=db port=4532 user=propstat password=password port=5432" "/data/flood3.geojson" -nln flood_zone_3 -append
echo "flood3 loaded"
ogr2ogr -f "PostgreSQL" PG:"dbname=propstat host=db port=4532 user=propstat password=password port=5432" "/data/flood2.geojson" -nln flood_zone_2 -append
echo "flood2 loaded"