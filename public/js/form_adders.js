var newQuestion = function(questionCount) {
  return '<div class="survey_form_question"><label for="question' + questionCount + '">Question ' + questionCount + ': </label><input type="text" name="survey[question' + questionCount + '" id="question' + questionCount + '"><span class="removeQuestion">Remove Question</span><div class="choice_form_container"><div class="choice_form_list">' + newChoice(questionCount, 1) + '</div><div class="choice_form_adder"><span class="addChoice">Add Choice</span></div></div>';
}

var newChoice = function(choiceCount) {
  return '<div class="choice_add"><label for="choice' + choiceCount + '">Choice ' + choiceCount + ': </label><input class="choice_input" type="text" name="survey[question1][choice' + choiceCount + ']" id="choice' + choiceCount + '"><span class="removeChoice">Remove Choice</span></div>';
}

var choiceCounter = function(target, choiceCount) {
  target.closest('.choice_form_container').children('.total_choice_count').attr('value', choiceCount);
}

var getChoiceCount = function(target) {
  return target.closest('.choice_form_container').children('.total_choice_count').attr('value')
}