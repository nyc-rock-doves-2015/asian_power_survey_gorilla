class CreateChoicesTable < ActiveRecord::Migration
  def change
    create_table :choices do |t|
      t.string :description, null: false
      t.references :question, null: false
    end
  end
end
