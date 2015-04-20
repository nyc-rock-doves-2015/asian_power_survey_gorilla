class User < ActiveRecord::Base
  has_secure_password

  has_many :survey_users
  has_many :surveys_taken, through: :survey_users, class_name: "Survey", source: :survey

  has_many :choice_users
  has_many :choices, through: :choice_users, class_name: "Choice", source: :choice

  has_many :surveys_created, class_name: "Survey", foreign_key: :user_id

  validates :name, uniqueness: true

  # You have an explicit validation to validate name.  Testing the password and
  # the confirmation should probably be done at the controller action.
  # Controllers have the responsibility for testing params
  def self.validate_signup(params)
    return "Username already exists" if User.find_by(name: params[:name])
    return "Password does not match confirmation." if params[:password] != params[:password_confirmation]
    ""
  end

  def self.authenticate(params)
    user = User.find_by(name: params[:name])
    if user && user.authenticate(params[:password])
      return ""
    else
      return "User or password is incorrect"
    end
  end

end
