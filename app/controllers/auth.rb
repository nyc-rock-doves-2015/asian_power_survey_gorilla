
get '/' do
  erb :index
end

get '/signin' do
  erb :'auth/signin'
end

post '/signin' do
  user = User.find_by_name(params[:name])

  if user && password_valid?(user, params[:password])
    session_in!(user)

    redirect '/'
  else
    set_error!("Incorrect username and/or password.")
    get_error

    redirect '/signin'
  end
end

get '/signup' do
  erb :'auth/signup'
end

post '/signup' do
  user = User.create(params[:user])
  if user.id
    redirect '/'
  else
    set_error!("Username already exists or passwords do not match.")
    get_error

    redirect '/'
  end
end


get '/signout' do
  session_out!

  redirect '/'
end
