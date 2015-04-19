$(document).ready(function() {

  $('.content-container').on('click', '.addQuestion', function(event) {
    var $target = $(event.target)

    var questionCount = parseInt(getQuestionCount($target)) + 1;

    var $node = newQuestion(questionCount);
    $target.closest('.survey_list_container').children('.survey_form_question_list').append($node);
    questionCounter($target, questionCount);
    $target.closest('.survey_form_container').find('.survey_form_question').last().children('.survey_form_description').focus();
  });

  $('.content-container').on('keypress', '.choice_form_list', function(event) {
    $target = $(event.target)
    if (event.keyCode == 13) {
      event.preventDefault();
      
      var choiceCount = parseInt(getChoiceCount($target)) + 1;
      var questionId = getQuestionId($target);

      var $node = newChoice(choiceCount, questionId);
      var $container = $target.closest('.choice_form_container').children('.choice_form_list')
      $container.append($node);
      $container.children('.choice_add').last().children('.choice_input').focus();
      choiceCounter($target, choiceCount);
    }
  });

  $('.link_code_copy').on('click', function(event) {
    var $target = $(event.target);
    var link = $target.closest('.survey_results_link').children('.link_input').val();
    copyToClipboard(link);
  })

  $('.question_list li').each(function(index) {

    var data = [];
    var $choice_list = $(this).closest('.survey_question').children('.row').children('.choice_list')
    var series = $choice_list.children('li').length

    $choice_list.children('li').each(function(index) {
      var $target = $(this);
      var $choice = $target.children('.choice_display')
      data[index] = {
        label: $choice.children('.question_choice').html(),
        data: $choice.children('.badge').children('.vote_count').html()
      }

    })

    var placeholder = $(this).closest('.survey_question').children('.row').children('.question_pie_chart');

    $.plot(placeholder, data, {
      series: {
        pie: { 
          show: true,
          radius: 1,
          label: {
            show: true,
            radius: 3/4,
            formatter: labelFormatter,
            background: { 
              opacity: 0.5,
              color: "#000"
            }
          }
        }
      },
      legend: {
        show: false
      }
    });

  });

});
