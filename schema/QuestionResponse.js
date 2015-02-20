'use strict';

exports = module.exports = function(app, mongoose) {
  var questionResponseSchema = new mongoose.Schema({
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    userCreated: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    time: { type: Date, default: Date.now },
    response : {type:Number},
    delay : {type:Number}
  });
  app.db.model('QuestionResponse', questionResponseSchema);
};
