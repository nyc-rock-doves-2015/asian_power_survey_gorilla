class User < ActiveRecord::Base
  has_secure_password

  has_many :survey_users
  has_many :surveys, through: :survey_users

  validates :name, uniqueness: true
end
