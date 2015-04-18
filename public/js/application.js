$(document).ready(function() {
  //create three initial fields
  var survey = new Survey();

  $('.addQuestion').on('click', function(event){
    $target = $(event.target)
    questionCount++;
    $node = newQuestion(questionCount);
    $target.closest('.survey_form').children('.survey_form_question_list').append($node);
  });

  $('.choice_form_list').keypress(function(event) {
    $target = $(event.target)
    if (event.keyCode == 13) {
      event.preventDefault();
      
      var choiceCount = parseInt(getChoiceCount($target)) + 1;

      $node = newChoice(choiceCount);
      $container = $target.closest('.choice_form_container').children('.choice_form_list')
      $container.append($node);
      $container.children('.choice_add').last().children('.choice_input').focus();
      choiceCounter($target, choiceCount);
    }
  });

  $('form').on('click', '.removeChoice', function(event) {
    $target = $(event.target)
    $target.closest('.choice_add').remove();
  });

});
