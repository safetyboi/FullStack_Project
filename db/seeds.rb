# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  User.destroy_all

  puts "Resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  User.create!(
    username: 'Demo-lition', 
    email: 'demo@user.io', 
    password: 'password'
  )

  10.times do 
    User.create!({
      username: Faker::Internet.unique.username(specifier: 3),
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end

  Donut.create!({
    name: 'Blueberry Bourbon Basil',
    donut_type: 'brioche',
    price: 6.00,
    description: 'Tastes like: the perfect end-of-summer picnic with bluberries and fresh cake'
  })

  Donut.create!({
    name: 'The O.G. (Orxata Glaze)',
    donut_type: 'brioche',
    price: 6.00,
    description: 'A brioche ring is dipped with our original, house-made Horchata (or Orxata) Glaze for a simple and sweet, delightfully uncomplicated donut. Orxata, a popular traditional Mexican drink, is made with a rice milk base, fresh ground cinnamon, and pure vanilla bean paste.'
  })
  Donut.create!({
    name: 'Cinnamon Sugar',
    donut_type: 'brioche',
    price: 6.00,
    description: 'A fresh, buttery brioche ring is thoroughly coated with our special recipe – sugar spiced with hints of cinnamon, ginger, and cardamom. Not too sweet, and spiced just right. An excellent way to really showcase the delicious buttery brioche.'
  })
  Donut.create!({
    name: 'Passion Fruit Cocoa Nib',
    donut_type: 'brioche',
    price: 6.00,
    description: 'Our signature brioche ring is brightly glazed with the sweet and tart flavor of passion fruit, and playfully kicked up with a dash of Cayenne. Roasted cocoa nibs (bits of cacao or chocolate beans) are sprinkled on top to balance the flavors with a touch of crunchy bitter chocolate. This donut will literally make your mouth water while you’re eating it!'
  })
  Donut.create!({
    name: 'Chocolate Almond Ganache',
    donut_type: 'brioche',
    price: 6.00,
    description: 'A fresh brioche ring is glazed thickly with rich, delicious dark chocolate made from scratch with 100% natural cocoa powder. Sweet, gooey, and topped with chopped salted Marcona almonds, this makes for a truly decadent chocolate lover’s combination!'
  })
  Donut.create!({
    name: 'Blueberry Bourbon Basil',
    donut_type: 'vegan',
    price: 6.00,
    description: 'Tastes like: the perfect end-of-summer picnic with bluberries and fresh cake'
  })
  Donut.create!({
    name: 'Apple Cider Fritter',
    donut_type: 'brioche',
    price: 6.00,
    description: 'Our fritter starts with a thick mix of freshly shredded granny smith apples, cinnamon, and coriander. The mix is folded into our signature brioche dough, and then formed and fried to perfection. Finally, while it’s still hot we dip it into our special gooey glaze made with real hard apple cider.'
  })
  Donut.create!({
    name: 'Razz-Pistachio Cheesecake',
    donut_type: 'brioche',
    price: 6.00,
    description: 'An all-time Blue Star favorite is back after a long hiatus! Razz-Pistachio Cheesecake starts with our 18-hour brioche shell. It’s filled with the most uniquely decadent cheesecake filling made with cream cheese and house-made pistachio purée. Chef topped it off with a tangy-sweet berry glaze made with raspberry purée and hibiscus flower. A sprinkling of crushed pistachios finishes this masterpiece with a delicate crunch!'
  })
  Donut.create!({
    name: 'Meyer Lemon & Key Lime Curd',
    donut_type: 'brioche',
    price: 6.00,
    description: 'A shell of our signature brioche is stuffed with a deliciously rich, buttery curd, made from Meyer Lemon and Key Lime purees. The silky filling is refreshingly tart and lightly sweet, and the shell is finished with a simple dusting of powdered sugar.'
  })
  Donut.create!({
    name: 'Pumpkin Panna Cotta Brulee',
    donut_type: 'brioche',
    price: 6.00,
    description: 'Behold, your Great Pumpkin fantasy awaits!! If you love pumpkin, this stunner is one for the books! Chef created a silky, creamy pumpkin panna cotta filling, stuffed into our buttery brioche shell, which is then brûléed and comes with a DIY pipette of a Pumpkin Old-Fashioned!! WOW! Imagine the fluffiest, butteriest pumpkin pie, textured with that perfect burnt-sugar crunch, singing with notes of smokey sweet whiskey…no tricks, only treats here, folks! ;)'
  })
  Donut.create!({
    name: 'Buttermilk Old-Fashioned',
    donut_type: 'old-fashioned',
    price: 6.00,
    description: 'Our delicious buttermilk old-fashioned cake donut, crispy on the outside and creamy-fluffy on the inside, simply adorned with our signature “O.G.” topping. Sometimes you just gotta keep it real.'
  })
  Donut.create!({
    name: 'Raspberry Rosemary Old-Fashioned',
    donut_type: 'old-fashioned',
    price: 6.00,
    description: 'A colorful standout in buttermilk donuts! Fresh raspberry puree is combined with Steve Smith hibiscus tea, and balanced with a bright herbal note of fresh rosemary. The bright berry flavor is beautifully paired with the creaminess of the buttermilk old-fashioned for a delicious yet sophisticated treat.'
  })
  Donut.create!({
    name: 'Chocolate Bergamot Old-Fashioned',
    donut_type: 'old-fashioned',
    price: 6.00,
    description: 'Originally a seasonal flavor, this beauty nearly brought the house down when we tried to take it away! Our proprietary buttermilk old-fashioned cake donut is infused with rich French dark chocolate, and then kissed with a lightly sweet Steve Smith Bergamot tea glaze.'
  })
  Donut.create!({
    name: 'Strawberry Mojito Old-Fashioned',
    donut_type: 'old-fashioned',
    price: 6.00,
    description: 'Summertime sipping with our Strawberry Mojito Old-Fashioned! This beauty starts with our signature buttermilk old-fashioned donut. Chef doused it in summer vibes with a strawberry mojito glaze made with ripe strawberries, fresh mint, and a splash of Greenbar Distillery’s Silver Rum. It’s a mouth vacation with every bite!'
  })
  Donut.create!({
    name: 'Lemon Poppy Old-Fashioned',
    donut_type: 'old-fashioned',
    price: 6.00,
    description: 'Our creamy buttermilk old-fashioned cake donut is lightly glazed with this bright, tartly sweet topping, made with fresh lemon juice and lemon zest. A light dusting of poppy seeds provides a bit of smoky texture balance.'
  })
  Donut.create!({
    name: 'Apple Brandy Crumble (V)',
    donut_type: 'vegan',
    price: 6.00,
    description: 'This fall treat is a legendary staff favorite! It starts with a scrumptious vanilla cake donut, and then smothered in a tart, sweet apple glaze made with barrel-aged apple brandy from Clear Creek Distillery from Portland! Chef topped it all off with a salted Marcona almond crumble to balance that apple sweetness with a salty, crunchy kick!'
  })
  Donut.create!({
    name: 'Blueberry Basil Cake (V)',
    donut_type: 'vegan',
    price: 6.00,
    description: 'One of our most famous glazes (Blueberry Bourbon Basil) meets fluffy vanilla cake, elevating the popular blueberry-vanilla combo to an outstanding next level!'
  })
  Donut.create!({
    name: 'Mimosa Cake (V)',
    donut_type: 'vegan',
    price: 6.00,
    description: "We’re poppin’ bottles! Donut style. This festive favorite starts with our fluffy vegan vanilla cake donut. Chef created a glaze made with California sparkling wine, orange marmalade, and candied orange sprinkles to capture the perfect mimosa to the very last sip."
  })
  Donut.create!({
    name: 'Mexican Hot Chocolate (V)',
    donut_type: 'vegan',
    price: 6.00,
    description: 'Our perfectly moist chocolate cake donut is slathered with a thick, gooey dark chocolate glaze and topped with our special blend of Mexican spices! (Including just a touch of Cayenne for a deliciously “caliente” experience…)'
  })
  Donut.create!({
    name: "Sugar n' Spice (V)",
    donut_type: 'vegan',
    price: 6.00,
    description: 'The perfect spiced cake donut really comes down to the balance in the spice blend, and here Chef has nailed it! Our not-too-sweet vanilla cake donut is doused with a special vanilla sugar with spices blended in, making it the ultimate candidate for dunking.'
  })
  Donut.create!({
    name: "Matcha Lime Crumble (V)",
    donut_type: 'vegan',
    price: 6.00,
    description: "This sumptuous star player begins with our signature vanilla cake donut soaked in a Makrut lime-leaf infused maple syrup. It’s topped with a rich glaze made with prize-winning matcha (green tea) from uji, Japan, and then sprinkled with a nutty, salted matcha crumble. It’s matcha on matcha with a lime kick!"
  })
  Donut.create!({
    name: "Tropical Delight (V)",
    donut_type: 'vegan',
    price: 6.00,
    description: "Our signature vegan cake donut is infused with natural coconut emulsion and dipped in a tropical glaze made with passion fruit purée, fresh pineapple juice, and real bananas. It’s all topped off with a sprinkling of toasted coconut for a juicy, smoky-sweet crunch!"
  })
  Donut.create!({
    name: "Passion Fruit Cake (V)",
    donut_type: 'vegan',
    price: 6.00,
    description: "It’s hard to believe sunshine can be captured in a donut, but that’s often what our customers say! Our vanilla cake donut is covered in bright, juicy passion fruit glaze (turned up a notch with a touch of heat!), then topped with crunchy cacao nibs."
  })
  puts "Done!"
end