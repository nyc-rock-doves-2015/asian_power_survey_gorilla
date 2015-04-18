
get '/surveys' do
  @surveys = Survey.all
  erb :'/survey/index'
end

get '/surveys/new' do
  erb :'/survey/new'
end

get '/surveys/:id' do |id|
  erb :'survey/show'
end

post '/surveys' do
  survey = Survey.create(title: params[:survey][:title], user_id: 1)
  # survey.add_questions(params)

  "#{params.inspect}"
  # redirect '/surveys'
end

get '/surveys/:id/results' do

end
