$(document).ready(function() {
  //create three initial fields
  var survey = new Survey();

  $('.container').on('click', '.addQuestion', function(event){
    $target = $(event.target)

    var questionCount = parseInt(getQuestionCount($target)) + 1;

    $node = newQuestion(questionCount);
    $target.closest('.survey_list_container').children('.survey_form_question_list').append($node);
    questionCounter($target, questionCount);
  });

  $('.container').on('keypress', '.choice_form_list', function(event) {
    $target = $(event.target)
    if (event.keyCode == 13) {
      event.preventDefault();
      
      var choiceCount = parseInt(getChoiceCount($target)) + 1;
      var questionId = getQuestionId($target);

      $node = newChoice(choiceCount, questionId);
      $container = $target.closest('.choice_form_container').children('.choice_form_list')
      $container.append($node);
      $container.children('.choice_add').last().children('.choice_input').focus();
      choiceCounter($target, choiceCount);
    }
  });

  $('.survey_form').on('submit', function(event) {
    
  })

  $('form').on('click', '.removeChoice', function(event) {
    $target = $(event.target)
    $target.closest('.choice_add').remove();
  });

});
