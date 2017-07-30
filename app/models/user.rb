# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  username      :string
#  email         :string
#  password_hash :string
#  password_salt :string
#  is_admin      :boolean
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class User < ApplicationRecord
  attr_accessor :password
  before_save :encrypt_password

  has_many :posts
  has_many :post_comments
  has_many :photos
  has_many :photo_comments

  validates :username, presence: true
  validates :email, presence: true
  validates :password, presence: true
  validates :password, confirmation: true

  def self.search(query)
    where("username like ?", "%#{query}%")
  end

  def self.authenticate(email, password)
    user = find_by_email(email)
    if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      nil
    end
  end

  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end
end
