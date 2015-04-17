$(document).ready(function() {
  //create three initial fields
  var survey = new Survey();
  var question = new Question(survey);
  survey.addQuestion(question);

  $('form').on('click', '.removeChoice', function(event) {
    $target = $(event.target)
    $target.closest('.choice_add').remove();
  });

  $('.choice_form_list').keypress(function(event) {
    $target = $(event.target)
    if (event.keyCode == 13) {
      event.preventDefault();
      
      var choice = new Choice(question);
      question.addChoice(choice);
      var choiceCount = question.choices.length + 1;

      $node = newChoice(choiceCount);
      $container = $target.closest('.choice_form_container').children('.choice_form_list')
      $container.append($node);
      $container.children('.choice_add').last().children('.choice_input').focus();
      choiceCounter($target, choiceCount);
    }
  });

});
