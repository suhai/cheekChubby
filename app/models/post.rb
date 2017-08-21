# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  title       :string
#  body        :text
#  tag         :text
#  user_id     :integer
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Post < ApplicationRecord
  belongs_to :user
  belongs_to :category
  has_many :post_comments

  has_attached_file :image, :default_url => "https://res.cloudinary.com/swy/image/upload/v1502331709/002-basic-stationery-branding-envelope-businesscard-seal-stamp-psd-mockup_rbj7zj.jpg"
  # ["https://res.cloudinary.com/swy/image/upload/v1499750590/images/pexels-photo.jpg","https://res.cloudinary.com/swy/image/upload/v1499750518/images/pexels-photo-371153.jpg", "https://res.cloudinary.com/swy/image/upload/v1499750461/images/pexels-photo-247942.jpg", "https://res.cloudinary.com/swy/image/upload/v1499750405/images/pexels-photo-185847.jpg", "https://res.cloudinary.com/swy/image/upload/v1499750366/images/pexels-photo-94555.jpg", "https://res.cloudinary.com/swy/image/upload/v1499750302/images/pexels-photo_3_copy.jpg", "https://res.cloudinary.com/swy/image/upload/v1499750301/images/food-salad-restaurant-person.jpg", "https://res.cloudinary.com/swy/image/upload/v1503359211/cheekchubbyhomepage_e2iukc.jpg", "https://res.cloudinary.com/swy/image/upload/v1499749890/images/city-people-walking-blur.jpg", "https://res.cloudinary.com/swy/image/upload/v1499750288/images/mavis-6-1580.jpg", "https://res.cloudinary.com/swy/image/upload/v1499750300/images/people-apple-iphone-writing.jpg", "https://res.cloudinary.com/swy/image/upload/v1499750293/images/parachute-skydiving-parachuting-jumping-128880.jpg", "https://res.cloudinary.com/swy/image/upload/v1499750289/images/mavis-painting-1580.jpg"].shuffle.first
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  validates :title, presence: true
  validates :category_id, presence: true
  validates :body, presence: true

  def sampleImage
     
  end

  def self.search(query)
    where("title like ? OR body like ? OR tags like ?", "%#{query}%", "%#{query}%", "%#{query}%")
  end
end
