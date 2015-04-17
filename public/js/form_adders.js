var newQuestion = function(questionCount) {
  return '<div class="survey_form_question"><label for="question' + questionCount + '">Question ' + questionCount + ': </label><input type="text" name="survey[question' + questionCount + '" id="question' + questionCount + '"><span class="removeQuestion">Remove Question</span><div class="choice_form_container"><div class="choice_form_list">' + newChoice(questionCount, 1) + '</div><div class="choice_form_adder"><span class="addChoice">Add Choice</span></div></div>';
}

var newChoice = function(questionCount, choiceCount) {
  return '<div class="choice_add"><label for="' + questionCount + 'choice' + choiceCount + '">Choice ' + choiceCount + ': </label><input type="text" name="survey[' + questionCount + 'choice' + choiceCount + '" id="' + questionCount + 'choice' + choiceCount + '"><span class="removeChoice">Remove Choice</span></div>';
}