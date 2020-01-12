const fetch = require('node-fetch');

const NOMINATIM_PORT = process.env.NOMINATIM_PORT;
const NOMINATIM_URL = `${process.env.NOMINATIM_HOST}${NOMINATIM_PORT ? ':' + NOMINATIM_PORT : ''}`;

const search  = async (ctx) => {
  const searchQuery = ctx.query.q;

  if (!searchQuery) {
    ctx.throw(400, 'Please, provide a search query');
  }

  try {

    const res = await fetch(`http://${NOMINATIM_URL}/search?q="${searchQuery}"&format=json`);
    const body = await res.json();
    ctx.ok(body);

  } catch (e) {
    console.error('Error fetching from Nominatim');
    ctx.throw(500, 'Sorry, the service is not working at the moment, try again later');
  }
}

module.exports = {
  search
}
