var newQuestion = function(questionCount) {
  return '<div class="survey_form_question"><label for="question' + questionCount + '">Question ' + questionCount + ': </label><input type="text" name="survey[question' + questionCount + '[description]" id="question' + questionCount + '"><span class="removeQuestion">Remove Question</span><div class="choice_form_container"><input class="total_choice_count" type="hidden" name="survey[question' + questionCount + '][count]" value="1"><div class="choice_form_list">' + newChoice(1) + '</div></div>';
}

var newChoice = function(choiceCount) {
  return '<div class="choice_add"><label for="choice' + choiceCount + '">Choice ' + choiceCount + ': </label><input class="choice_input" type="text" name="survey[question1][choice' + choiceCount + ']" id="choice' + choiceCount + '"><span class="removeChoice">Remove Choice</span></div>';
}

var choiceCounter = function(target, choiceCount) {
  target.closest('.choice_form_container').children('.total_choice_count').attr('value', choiceCount);
}

var getChoiceCount = function(target) {
  return target.closest('.choice_form_container').children('.total_choice_count').attr('value');
}

var questionCounter = function(target, questionCount) {
  $target.closest('.survey_list_container').children('.survey_form_question_list').children('.total_question_count').attr('value', questionCount);
}

var getQuestionCount = function (target) {
  return $target.closest('.survey_list_container').children('.survey_form_question_list').children('.total_question_count').attr('value');
}