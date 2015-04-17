$(document).ready(function() {
  //create three initial fields
  var questionCount = 1;
  var choiceCount = 1;

  //remove a textfield
  $('form').on('click', '.removeQuestion', function(event) {
    $target = $(event.target)
    $target.closest('.survey_form_question').remove();
  });

  //add a new node
  $('.addQuestion').on('click', function(event){
    $target = $(event.target)
    questionCount++;
    $node = newQuestion(questionCount);
    $target.closest('.survey_form').children('.survey_form_question_list').append($node);
  });

  $('.addChoice').on('click', function(event){
    $target = $(event.target)
    questionString = $target.closest('.survey_form_question').children('label').attr('for')
    choiceCount++;
    $node = newChoice(questionString, choiceCount);
    $target.closest('.choice_form_container').children('.choice_form_list').append($node);
  });
});
