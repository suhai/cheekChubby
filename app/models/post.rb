class Post < ApplicationRecord
  belongs_to :category
  belongs_to :user
  has_many :post_comments
  has_attached_file :image, :default_url => "https://res.cloudinary.com/swy/image/upload/v1499749857/images/student.svg"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  validates :title, presence: true
  validates :category_id, presence: true
  validates :body, presence: true

  def self.search(query)
    where("title like ? OR body like ?", "%#{query}%", "%#{query}%")
  end
end
