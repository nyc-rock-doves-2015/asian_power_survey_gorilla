
class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::RMagick

  process resize_to_fill: [75, 75]

end