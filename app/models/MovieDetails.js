module.exports = {
  getMovieDetailsWithId: function(req, res, movieListTable) {
    var movieId = Number(req.param('movieId'));
    movieListTable.find({movieId: movieId}).toArray(function(err, items) {
      res.send(items);
    });
  },
  getMovieList: function(req, res, movieListTable) {
    movieListTable.find({}, {movieId: 1, movieName: 1}).toArray(function(err, items) {
      res.send(items);
    });
  }
}