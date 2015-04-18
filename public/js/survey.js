function Survey() {
  this.questions = [];
}

Survey.prototype.addQuestion = function(question) {
  this.questions.push(question);
}