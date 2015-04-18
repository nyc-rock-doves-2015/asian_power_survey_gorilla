
get '/surveys' do
  @surveys = Survey.all
  erb :'/survey/index'
end

get '/surveys/new' do
  erb :'/survey/new'
end

get '/surveys/:id' do |id|
  @survey = Survey.find(id)
  erb :'survey/show'
end

post '/surveys' do
  survey = Survey.create(title: params[:survey][:title], user_id: current_user.id, image: params[:survey][:image])
  survey.add_questions(params)

  redirect '/surveys'
end

post '/submit' do
  survey = Survey.find(params[:survey_id])
  params.each do |question, choice|
    ChoiceUser.create(user: current_user, choice_id: choice)
  end

  redirect "/surveys/#{survey.id}/results"
end

get '/surveys/:id/results' do |id|
  @survey = Survey.find(id)
  erb :'/survey/results'
end
