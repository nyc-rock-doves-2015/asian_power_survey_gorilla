class CreateSurveysTable < ActiveRecord::Migration
  def change
    create_table :surveys do |t|
      t.string :title, null: false
      t.references :user, null: false
      t.string :image
      t.string :link_code
      t.timestamps
    end
  end
end
