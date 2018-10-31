const router = require('express').Router();
const venueController = require('../controllers/venueController');
const authController = require('../controllers/authController');
const secureRoute = require('../lib/secure-route');

router.get('/', function(req, res) {
  res.render('home');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.route('/venues')
  .get(venueController.indexRoute);

router.get('/new', secureRoute, venueController.newRoute);

router.route('/venues/:id')
  .get(venueController.showRoute)
  .put(secureRoute, venueController.updateRoute)
  .delete(secureRoute, venueController.deleteRoute);

router.post('/venues', secureRoute, venueController.createRoute);

router.get('/venues/:id/edit', secureRoute, venueController.editRoute);

router.route('/register')
  .get(authController.registerFormRoute)
  .post(authController.registerRoute);

router.route('/login')
  .get(authController.loginFormRoute)
  .post(authController.loginRoute);

router.route('/logout')
  .get(authController.logoutRoute);

module.exports = router;
