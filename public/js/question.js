function Question() {
  this.choices = [];

}

Question.prototype.addChoice = function(choice) {
  this.choices.push(choice);
}