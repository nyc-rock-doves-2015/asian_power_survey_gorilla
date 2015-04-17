class Choice < ActiveRecord::Base
  belongs_to :question

  has_many :choice_users
  has_many :users, through: :choice_users
end
