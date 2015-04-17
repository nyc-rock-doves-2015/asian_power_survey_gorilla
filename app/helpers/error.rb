def set_error!(msg)
  flash[:error] = msg
end

def get_error
  flash[:error]
end