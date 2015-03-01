'use strict';

exports = module.exports = function(app, mongoose) {
  var organisationSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    time: { type: Date, default: Date.now },
    emailExtension: { type: String, default: '' }
  });
  app.db.model('Organisation', organisationSchema);
};
