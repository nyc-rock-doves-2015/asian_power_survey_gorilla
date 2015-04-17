class CreateChoiceUsersTable < ActiveRecord::Migration
  def change
    create_table :choice_users do |t|
      t.references :choice, null: false
      t.references :user, null: false
    end
  end
end
