module.exports = {
  getMovieComments: function(req, res, db) {
    var userId = req.param("userId"),
        movieId = Number(req.param("movieId"));
    db.find({userId: userId}, {movieId: movieId}).toArray(function(err, items) {
      res.send(items);
    });
  }
}