
get '/surveys' do
  @survey = Survey.find_by(link_code: params[:link])
  erb :'survey/show'
end

get '/surveys/new' do
  erb :'/survey/new'
end

get '/surveys/:id' do |id|
  @survey = Survey.find(id)
  erb :'survey/show'
end

post '/surveys' do
  title = params[:survey][:title]
  if title == ""
    flash[:error] = "Survey needs a title"
    redirect 'surveys/new'
  else
    survey = Survey.create(title: title, user_id: current_user.id, image: params[:survey][:image])
    survey.add_questions(params)

    redirect survey_url(survey) + "/results"
  end
end

post '/submit' do
  survey = Survey.find(params[:survey_id])
  if survey.takers.include?(current_user)
    flash[:error] = "You have already taken this survey"
  else
    params.each do |question, choice|
      ChoiceUser.create(user: current_user, choice_id: choice)
    end
  end

  redirect "/surveys/#{survey.id}/results"
end

get '/surveys/:id/results' do |id|
  @survey = Survey.find(id)

  erb :'/survey/results'
end
