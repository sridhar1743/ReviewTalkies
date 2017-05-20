var MongoClient = require('mongodb').MongoClient;
var obj = {
  connect: function(req, res, next) {
    app = global.app;
// Connect to the db
    MongoClient.connect("mongodb://localhost:27017/ReviewTalkiesDB", function(err, db) {
      if (!err) {
        console.log("We are connected");
      }

      app.locals.movieListTable = db.collection('movieList');
      app.locals.movieRatingTable = db.collection('userRating');
      app.locals.movieCommentsTable = db.collection('userComments');
      next();
    });
  }
}
module.exports = obj;
