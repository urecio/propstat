const Router = require('koa-router');
const router = new Router();
const SearchCtrl = require('../controllers/search');

router.get('/', SearchCtrl.search);

module.exports = router.routes();
