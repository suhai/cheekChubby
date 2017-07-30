class CreatePhotoComments < ActiveRecord::Migration[5.1]
  def change
    create_table :photo_comments do |t|
      t.text :body
      t.references :user, foreign_key: true
      t.references :photo, foreign_key: true

      t.timestamps
    end
  end
end
