
get '/surveys' do
  if current_user.nil? # current_user is falsy if not logged in, no need to explicitly .nil? check
    flash[:error] = "You must sign in first"
    redirect '/signin'
  else
    @survey = Survey.find_by(link_code: params[:link])
    erb :'survey/show'
  end
end

get '/surveys/new' do
  erb :'/survey/new'
end

get '/surveys/:id' do |id|
  @survey = Survey.find(id)
  erb :'survey/show'
end

post '/surveys' do
  # Couldn't this be done in the model?
  # Follow the successful .save pattern up above?
  title = params[:survey][:title]
  if title == "" # #blank? or #empty? might be better
    flash[:error] = "Survey needs a title"
    redirect 'surveys/new'
  else
    survey = Survey.create(title: title, user_id: current_user.id, image: params[:survey][:image])
    survey.add_questions(params)

    redirect survey_url(survey) + "/results"
  end
end

post '/submit' do
  # A method like survey.has_been_taken_by?(current_user) might
  # be really pretty.  Hide this include? logic inside that.
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
