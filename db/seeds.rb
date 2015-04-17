require 'faker'

User.create(name: "John", password: "123");

10.times do
  user = User.create(name: Faker::Name.name, password: "123")
end

5.times do
  survey = Survey.create(title: Faker::Commerce.department, user_id: User.pluck(:id).sample)

  question = Question.create(description: Faker::Company.bs, survey_id: survey.id)

  7.times do
    Choice.create(description: Faker::Lorem.word, question_id: question.id)
  end
end