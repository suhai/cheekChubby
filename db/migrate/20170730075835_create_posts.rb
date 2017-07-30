class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.references :user, foreign_key: true
      t.references :category, foreign_key: true
      t.text :body
      t.string :image
      t.text :tags

      t.timestamps
    end
  end
end
