const Venue = require('../models/venue');

function indexRoute(req, res) {
  Venue.find().then(venues => {
    const venueObject = {
      venues: venues
    };
    res.render('venues/index', venueObject);
  });
}

function showRoute(req, res) {
  Venue
    .findById(req.params.id)
    .then(venue => {
      res.render('venues/show', venue);
    });
}

function newRoute(req, res) {
  res.render('venues/new');
}

function createRoute(req, res) {
  Venue.create(req.body)
    .then(result => res.redirect(`/venues/${result._id}`));
}

function editRoute(req, res) {
  Venue.findById(req.params.id)
    .then(result => {
      res.render('venues/edit', result);
    });
}

function updateRoute(req, res) {
  Venue.findByIdAndUpdate(req.params.id, req.body)
    .then(venue => {
      res.redirect(`/venues/${venue._id}`);
    });
}

function deleteRoute(req, res) {
  Venue.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect('/venues/');
    });
}

module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute,
  newRoute: newRoute,
  createRoute: createRoute,
  editRoute: editRoute,
  updateRoute: updateRoute,
  deleteRoute: deleteRoute
};
