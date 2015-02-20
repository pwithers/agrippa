'use strict';

exports = module.exports = function(app, mongoose) {
  var questionSchema = new mongoose.Schema({
    text: { type: String, default: '' },
    userCreated: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    time: { type: Date, default: Date.now }
  });
  app.db.model('Question', questionSchema);
};
