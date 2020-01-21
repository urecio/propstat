const { Pool } = require('pg');
const { PG_PORT, PG_HOST, PG_USER, PG_PASSWORD, PG_DATABASE} = process.env;
const pool = new Pool({
  host: PG_HOST,
  port: PG_PORT,
  user: PG_USER,
  password: PG_PASSWORD,
  database: PG_DATABASE
})

const isInFloodZone2 = async (long, lat) => {
  try {
    const client = await pool.connect()
    const data = await client.query(`
      with cte as ( select 1 as id, ST_SetSRID(ST_POINT(${long}, ${lat}), 4326) point_location)
      select * from flood_zone_2 a, cte b where ST_contains(b.point_location, wkb_geometry) or ST_intersects(b.point_location, wkb_geometry) or ST_within(b.point_location, wkb_geometry);`
    ).then((data) => !!(data.rows && data.rows[0]));
    await client.release();
    return data;
  } catch (e) {
    console.error('isInFloodZone2 posgres query failed');
    throw new Error(`isInFloodZone2 posgres query failed error>> ${e}`);
  }
}

const isInFloodZone3 = async (long, lat) => {
  try {
    const client = await pool.connect()
    const data = await client.query(`
    with cte as ( select 1 as id, ST_SetSRID(ST_POINT(${long}, ${lat}), 4326) point_location)
    select * from flood_zone_3 a, cte b where ST_contains(b.point_location, wkb_geometry) or ST_intersects(b.point_location, wkb_geometry) or ST_within(b.point_location, wkb_geometry);`
    ).then((data) => !!(data.rows && data.rows[0]));
    await client.release();
    return data;
  } catch (e) {
    console.error('isInFloodZone3 posgres query failed');
    throw new Error(`isInFloodZone3 posgres query failed error>> ${e}`);
  }
}
 

module.exports = {
 isInFloodZone2,
 isInFloodZone3
}