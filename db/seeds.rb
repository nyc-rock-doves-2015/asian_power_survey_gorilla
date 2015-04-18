require 'faker'

User.create(name: "John", password: "123");

# create random users
10.times do
  user = User.create(name: Faker::Name.name, password: "123")
end

# create random surveys with questions and choices
5.times do
  survey = Survey.create(title: Faker::Commerce.department, user_id: User.pluck(:id).sample, image: Faker::Avatar.image)

  question = Question.create(description: Faker::Company.bs, survey_id: survey.id)

  7.times do
    Choice.create(description: Faker::Lorem.word, question_id: question.id)
  end
end

5.times do
  survey = Survey.create(title: Faker::Commerce.department, user_id: User.pluck(:id).sample, image: Faker::Avatar.image)

  4.times do
    question = Question.create(description: Faker::Company.bs, survey_id: survey.id)

    7.times do
      Choice.create(description: Faker::Lorem.word, question_id: question.id)

    end
  end
end

# have random users take random surveys
Survey.all.each do |survey|
  survey.questions.each do |question|
    100.times do
      choice_id = question.choices.pluck(:id).sample
      ChoiceUser.create(choice_id: choice_id, user_id: User.pluck(:id).sample)
    end
  end
end
