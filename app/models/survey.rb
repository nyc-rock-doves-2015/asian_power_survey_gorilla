require 'securerandom'

class Survey < ActiveRecord::Base
  belongs_to :creator, class_name: "User", foreign_key: :user_id
  has_many :survey_users
  has_many :takers, through: :survey_users, class_name: "User", source: :survey
  has_many :questions

  mount_uploader :image, ImageUploader

  before_create :create_link_code

  def add_questions(params)
    count = params[:survey][:count].to_i
    count.times do |i|
      key = "question#{i + 1}".to_sym
      description = params[:survey][key][:description]
      next if description == ""
      question = questions.create(description: description)
      question.add_choices(params, key)
    end
  end

  private

  def create_link_code
    self.link_code = SecureRandom.hex(5)
  end
end
