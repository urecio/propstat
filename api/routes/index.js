module.exports = (router) => {
  router.prefix('/')
  router.use('/search', require('./search'))
}
