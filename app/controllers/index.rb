get '/' do
  erb :'survey/new'
end

post '/surveys' do
  # survey = Survey.create()
  "#{params.inspect}"

end
