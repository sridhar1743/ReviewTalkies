module.exports = {
  getMovieComments: function(req, res, movieCommentsTable) {
    var userId = req.param("userId"),
        movieId = Number(req.param("movieId"));
    movieCommentsTable.find({userId: userId}, {movieId: movieId}).toArray(function(err, items) {
      res.send(items);
    });
  }
}