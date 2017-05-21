module.exports = {
  getMovieRating: function(req, res, movieRatingTable) {
    var movieId = Number(req.param("movieId"));
    movieRatingTable.find({movieId: movieId}).toArray(function(err, items) {
      res.send(items);
    });
  }
}