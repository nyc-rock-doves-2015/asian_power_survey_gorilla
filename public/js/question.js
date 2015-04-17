function Question(survey) {
  this.survey = survey;
  this.choices = [];

}

Question.prototype.addChoice = function(choice) {
  this.choices.push(choice);
}