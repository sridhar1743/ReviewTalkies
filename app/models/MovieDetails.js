module.exports = {
  getMovieDetailsWithId: function(req, res, db) {
    var movieId = Number(req.param('movieId'));
    db.find({movieId: movieId}).toArray(function(err, items) {
      res.send(items);
    });
  }
}