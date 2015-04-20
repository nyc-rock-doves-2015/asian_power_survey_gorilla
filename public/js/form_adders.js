// OK, you should be having an allergic reaction to this.  What's going on
// here, and who should be managing it?  How brittle is this HTML?  I'd say,
// pretty.  What are we doing here and is there an object that should manage 
var newQuestion = function(questionCount) {
  return '<div class="survey_form_question form-group"><label for="question' + questionCount + '">Question ' + questionCount + ': </label><input class="survey_form_description form-control new_input" type="text" name="survey[question' + questionCount + '[description]" id="question' + questionCount + '"><div class="choice_form_container"><input class="total_choice_count" type="hidden" name="survey[question' + questionCount + '][count]" value="1"><div class="choice_form_list">' + newChoice(1, 'question' + questionCount) + '</div></div>';
}

var newChoice = function(choiceCount, questionId) {
  return '<div class="choice_add"><label class="choice_label" for="choice' + choiceCount + '">Choice ' + choiceCount + ':</label><input class="choice_input new_input" type="text" name="survey[' + questionId + '][choice' + choiceCount + ']" id="choice' + choiceCount + '"></div>';
}

var choiceCounter = function(target, choiceCount) {
  target.closest('.choice_form_container').children('.total_choice_count').attr('value', choiceCount);
}

var getChoiceCount = function(target) {
  return target.closest('.choice_form_container').children('.total_choice_count').attr('value');
}

var questionCounter = function(target, questionCount) {
  target.closest('.survey_list_container').children('.survey_form_question_list').children('.total_question_count').attr('value', questionCount);
}

var getQuestionCount = function(target) {
  return target.closest('.survey_list_container').children('.survey_form_question_list').children('.total_question_count').attr('value');
}

var getQuestionId = function(target) {
  return target.closest('.survey_form_question').children('.survey_form_description').attr('id');
}

var flash_warning = function() {
  flag = false;
  $('.new_input').each(function(index) {
    $input = $(this);
    if ($input.val() === "") {
      flag = true;
    }
  })
  if (flag) {
    $('.alert-warning').show();
  }
  else {
    $('.alert-warning').hide();
  }
}

function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

function labelFormatter(label, series) {
    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
  }
