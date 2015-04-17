class CreateSurveyUsersTable < ActiveRecord::Migration
  def change
    create_table :survey_users do |t|
      t.references :user
      t.references :survey
    end
    add_index :survey_users, [:user_id, :survey_id], unique: true
  end
end
