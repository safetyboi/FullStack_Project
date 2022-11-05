# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

  has_secure_password
  # takes care of #password=(setter), #password(getter) for us
  # replaces #is_password? with #authenticate
  # adds presence_validation
  # adds password_confirmation functionality

  before_validation :ensure_session_token

  validates :username, 
    uniqueness: true, 
    length: { in: 3..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  # validates :email, 
  #   uniqueness: true, 
  #   length: { in: 3..255 }, 
  #   format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true


  def self.find_by_credentials(username, email, password)
    user = User.find_by(username: username)
    
    user&.authenticate(password) ? user : nil
  end
  
  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
  

  private
  def generate_unique_session_token
    loop do # also can use while true
      session_token = SecureRandom::urlsafe_base64
      return session_token unless User.exists?(session_token: session_token)
    end
  end
end
