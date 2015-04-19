
get '/' do
  if current_user
    @surveys_taken = current_user.surveys_taken
    @surveys_created = current_user.surveys_created
    erb :index
  else
    redirect '/signin'
  end
end

get '/signin' do
  erb :'auth/signin'
end

post '/signin' do
  flash[:error] = User.authenticate(params[:user])
  if !blank(flash.next[:error])
    redirect '/signin'
  else
    user = User.find_by(name: params[:user][:name])
    session_in!(user)
    redirect '/'
  end
end

get '/signup' do
  erb :'auth/signup'
end

post '/signup' do
  flash[:error] = User.validate_signup(params[:user])
  if !blank(flash.next[:error])
    redirect '/signup'
  else
    user = User.create(params[:user])
    session_in!(user)
    redirect '/'
  end
end


get '/signout' do
  session_out!
  redirect '/'
end
