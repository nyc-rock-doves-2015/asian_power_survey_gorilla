def password_valid?(user, password)
  user.authenticate(password: password) ? true : false
end