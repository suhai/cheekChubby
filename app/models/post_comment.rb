# == Schema Information
#
# Table name: post_comments
#
#  id         :integer          not null, primary key
#  body       :text
#  user_id    :integer
#  post_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PostComment < ApplicationRecord
  belongs_to :user
  belongs_to :post
end
