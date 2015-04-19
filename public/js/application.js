$(document).ready(function() {

  var survey = new Survey();

  $('#yield').on('click', '.addQuestion', function(event){
    $target = $(event.target)

    var questionCount = parseInt(getQuestionCount($target)) + 1;

    $node = newQuestion(questionCount);
    $target.closest('.survey_list_container').children('.survey_form_question_list').append($node);
    questionCounter($target, questionCount);
    $target.closest('.survey_form_container').find('.survey_form_question').last().children('.survey_form_description').focus();
  });

  $('#yield').on('keypress', '.choice_form_list', function(event) {
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

  $('.question_list li').each(function(index) {

    var data = [];
    var $choice_list = $(this).closest('.survey_question').children('.row').children('.choice_list')
    var series = $choice_list.children('li').length

    $choice_list.children('li').each(function(index) {
      $target = $(this);
      $choice = $target.children('.choice_display')
      data[index] = {
        label: $choice.children('.question_choice').html(),
        data: $choice.children('.badge').children('.vote_count').html()
      }

    })

    var placeholder = $target.closest('.survey_question').children('.row').children('.question_pie_chart');

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

  function labelFormatter(label, series) {
    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
  }

});
