'use strict';

exports = module.exports = function(app, mongoose) {
  var onResponseSchema = new mongoose.Schema({
    questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    filterQuestionId:{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
    condition :{ type: String, default: '' },
    action: { type: String, default: '' }
  });
  app.db.model('Condition', conditionSchema);
};
