class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :image
      t.string :image_title
      t.string :image_file_size
      t.string :image_content_type
      t.string :image_description
      t.references :category, foreign_key: true
      t.references :user, foreign_key: true
      t.text :tags

      t.timestamps
    end
  end
end
