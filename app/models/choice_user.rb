class ChoiceUser < ActiveRecord::Base
  belongs_to :user
  belongs_to :choice

  after_create :add_survey_users_record

  private

  def add_survey_users_record
    user = User.find(user_id)
    survey = choice.question.survey
    SurveyUser.find_or_create_by(user: user, survey: survey)
  end
end
