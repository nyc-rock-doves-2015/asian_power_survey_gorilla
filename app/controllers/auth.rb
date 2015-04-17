get '/signin' do
  erb :'auth/signin'
end

post '/signin' do
  user = User.find(name: params[:name])
  if user & password_valid?(user, params[:password])
    redirect '/'
  else
    redirect '/signin'
  end
end

get '/signup' do
  erb :'auth/signup'
end

post '/signup' do
end

