
# if Rails.env.production?
#   CarrierWave.configure do |config|
#     config.root = Rails.root.join('tmp') # adding these...
#     config.cache_dir = 'carrierwave' # ...two lines

#     config.fog_credentials = {

#       :provider              => 'AWS',
#       :aws_access_key_id     => ENV['AWS_ACCESS_KEY_ID'],
#       :aws_secret_access_key => ENV['AWS_SECRET_ACCESS_KEY'],
#       :region                => ENV['S3_REGION']
#     }
#     config.fog_directory     =  ENV['S3_BUCKET_NAME']    
#   end
# end


# require 'carrierwave/storage/abstract'
# require 'carrierwave/storage/file'
# require 'carrierwave/storage/fog'

# CarrierWave.configure do |config|
#   if Rails.env.production?
#     config.storage :fog
#     config.fog_provider = 'fog/aws'
#     config.fog_credentials = {
#       :provider              => 'AWS',
#       :aws_access_key_id     => ENV['S3_KEY'],
#       :aws_secret_access_key => ENV['S3_SECRET'],
#       :region                => ENV['S3_REGION']
#     }
#     config.fog_directory = ENV['S3_BUCKET']
#   else
#     config.storage :file
#     config.enable_processing = false if Rails.env.test?
#   end
# end





# if Rails.env.production?
#   CarrierWave.configure do |config|
#     config.fog_credentials = {
#       # Configuration for Amazon S3
#       :provider              => 'AWS',
#       :aws_access_key_id     => ENV['S3_KEY'],
#       :aws_secret_access_key => ENV['S3_SECRET'],
#       :region                => ENV['S3_REGION']
#     }
#     config.fog_directory = ENV['S3_BUCKET']
#   end
# end
 


