'use strict';

exports = module.exports = function(app, mongoose) {
  var conditionSchema = new mongoose.Schema({
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    filterQuestionId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    condition :{ type: String, default: '' }
  });
  app.db.model('Condition', conditionSchema);
};
