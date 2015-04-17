$(document).ready(function() {
  //create three initial fields
  var questionCount = 1;
  var choiceCount = 1;

  $('form').on('click', '.removeChoice', function(event) {
    $target = $(event.target)
    $target.closest('.choice_add').remove();
  });

  $('.choice_form_list').keypress(function(event) {
    $target = $(event.target)
    if (event.keyCode == 13) {
      event.preventDefault();
      choiceCount++;
      $node = newChoice(choiceCount);
      $target.closest('.choice_form_container').children('.choice_form_list').append($node);
    }
  });

});
