def password_valid?(user, password)
  user.authenticate(password) ? true : false
end

def session_in!(user)
  session[:user_id] = user.id
end

def session_out!
  session[:user_id] = nil
end

def current_user
  User.find(session[:user_id]) if session[:user_id]
end

def bounce_guest!
  unless current_user
    set_error! "Please sign in to do that."
    redirect '/signin'
  end
end

def blank(string)
  string == "" || string.nil?
end
