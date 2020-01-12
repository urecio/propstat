
function search (ctx) {
  // let searchQuery = ctx.request.query;
  ctx.ok({ addresses: [{ address: '', geojson: {}, id: 1 }] });
}

module.exports = {
  search
}
