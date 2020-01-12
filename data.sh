mkdir -p data

if [ ! -f data/ea_floodmapforplanningriversandseafloodzone2_shp_full.zip ]; then
  curl https://propstat.s3.eu-west-2.amazonaws.com/ea_floodmapforplanningriversandseafloodzone2_shp_full.zip --output data/ea_floodmapforplanningriversandseafloodzone2_shp_full.zip
  unzip data/ea_floodmapforplanningriversandseafloodzone2_shp_full.zip -d data/flood2
fi

if [ ! -f data/ea_floodmapforplanningriversandseafloodzone3_shp_full.zip ]; then
  curl https://propstat.s3.eu-west-2.amazonaws.com/ea_floodmapforplanningriversandseafloodzone3_shp_full.zip --output data/ea_floodmapforplanningriversandseafloodzone3_shp_full.zip
  unzip data/ea_floodmapforplanningriversandseafloodzone3_shp_full.zip -d data/flood3
fi