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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
