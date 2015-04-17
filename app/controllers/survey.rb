
get '/surveys' do
  @surveys = Survey.all
  erb :'/survey/index'
end

get '/surveys/:id' do |id|
  erb :'survey/show'
end

get '/surveys/new' do
  erb :'/survey/new'
end

post 'surveys' do
end

get '/surveys/:id/results' do

end

