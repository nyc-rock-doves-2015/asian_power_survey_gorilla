require 'securerandom'

class Survey < ActiveRecord::Base
  belongs_to :creator, class_name: "User", foreign_key: :user_id
  has_many :survey_users
  has_many :users, through: :survey_users
  has_many :questions

  before_create :create_link_code


  private

  def create_link_code
    self.link_code = SecureRandom.hex(5)
  end
end
