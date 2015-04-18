class Question < ActiveRecord::Base
  belongs_to :survey
  has_many :choices

  def add_choices(params, question_key)
    count = params[:survey][question_key][:count].to_i
    count.times do |i|
      key = "choice#{i + 1}".to_sym
      choices.create(description: params[:survey][question_key][key])
    end
  end

end
