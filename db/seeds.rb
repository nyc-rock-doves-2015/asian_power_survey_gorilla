require 'faker'

5.times do
  user = User.create(name: Faker::Name.name, email: Faker::Internet.email, password_digest: "123")
  20.times do
    blog = Blog.create(title: Faker::Company.catch_phrase, content: Faker::Lorem.paragraph(4), user_id: user.id)
    rand(4).times do
      comment = Comment.create(content: Faker::Lorem.sentence, user_id: (rand(5) + 1), blog_id: blog.id)
    end
  end
end
