get '/' do
  erb :'survey/new'
end

post '/surveys' do
  # survey = Survey.create()
  # "#{params.inspect}"
  survey = Survey.create(title: params[:survey][:title], user_id: 1)
  survey.questions.create(description: params[:survey][:question1][:description])

end
