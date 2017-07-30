# == Schema Information
#
# Table name: photo_comments
#
#  id         :integer          not null, primary key
#  body       :text
#  user_id    :integer
#  photo_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class PhotoComment < ApplicationRecord
  belongs_to :user
  belongs_to :photo
end
