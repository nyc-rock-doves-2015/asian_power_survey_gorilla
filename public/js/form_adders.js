var newChoice = function(choiceCount) {
  return '<div class="choice_add"><label for="choice' + choiceCount + '">Choice ' + choiceCount + ': </label><input class="choice_input" type="text" name="survey[question1choices][choice' + choiceCount + ']" id="choice' + choiceCount + '"><span class="removeChoice">Remove Choice</span></div>';
}