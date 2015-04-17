class CreateUsersTable < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false, unique: true
      t.string :password_digest
      t.timestamps
    end
  end
end
