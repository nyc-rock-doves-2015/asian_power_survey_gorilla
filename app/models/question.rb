class Question < ActiveRecord::Base
  belongs_to :survey
  has_many :choices

  def add_choices(params)
    count = params[:survey][:question1][:count].to_i
    count.times do |i|
      key = "choice#{i + 1}".to_sym
      choices.create(description: params[:survey][:question1][key])
    end
  end

end
