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

require 'test_helper'

class PhotoCommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
