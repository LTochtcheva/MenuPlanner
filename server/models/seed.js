'use strict'
const Recipe = require('./Recipe')

Recipe.sync({force: true})
.then(() => {
  Recipe.create({
    title: 'Fish & Chips',
      category: 'fish',
      ingredients: 'White fish, potatoes, some flour, lots of oil',
      images: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmITDITLErZk7p4q6VJ3_TUvwIGY79m1AUvxN0G6BvARay_qm_',
      likes: 100,
      description: 'Not available outside Great Britain'
  })
  Recipe.create({
    title: 'TheBestChiliEver',
      category: 'all time favorites',
      ingredients: 'Canned beans, ground beef, tomatoes',
      images: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS9wISJRlw4LWyK3VwzYVDrHHeMogKaBK5M3tslHVnXXksFNIxf',
      likes: 10,
      description: 'Ask Caroline'
  })
  Recipe.create({
    title: 'Signature Sandwich',
      category: 'no time to cook',
      ingredients: 'Bread - 2 slices, ham, tomatoes, salad leaves',
      images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-t1XpwgCPmirh6QKnLqoRzcBe_9Hfcoe1SvL5_VMyQlciRr3',
      likes: 100,
      description: 'Put everything together'
  })
  Recipe.create({
    title: 'Addictive Cucumbers',
      category: 'vegetables',
      ingredients: 'Cucumbers',
      images: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRVBhWLz-Y66aqdPcbTstUvOv-osgauhvQOv2EW0IMQcmHuBym-',
      likes: 100,
      description: 'Slice cucumbers and spice them up with garlic chili paste, then add sesame soy soy dressing'
  })
  Recipe.create({
    title: 'spaghetti carbonara',
      category: 'pasta',
      ingredients: 'spaghetti',
      images: 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/10/0/SM405_Spaghetti-Carbonara_s4x3.jpg.rend.hgtvcom.616.462.jpeg',
      likes: 4,
      description: 'Cook spaghetti, make great sauce'
  })
  Recipe.create({
    title: 'Chicken vegetable stir fry',
      category: 'chicken',
      ingredients: 'chicken and some other stuff',
      images: 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_900x675/public/image/recipes/ck/13/07/chicken-vegetable-stir-fry-ck-x.jpg?itok=0kONl5_M',
      likes: 10,
      description: 'Cook everything'
  })
  Recipe.create({
    title: 'Chicken alfredo',
      category: 'pasta',
      ingredients: 'chicken, good pasta, crem',
      images: 'http://natura.ca/AdminRecettes/images/recettes/fettucine-alfredo.jpg',
      likes: 100,
      description: 'Cook spaghetti, make great sauce'
  })
  Recipe.create({
    title: 'Свекольник',
      category: 'russian',
      ingredients: 'Свекла',
      images: 'http://orsimages.unileversolutions.com/ORS_Images/Knorr_ru-RU/sup-svekolnik%20_2_1.2.15_326X580_2_1.2.15_326X580.Jpeg',
      likes: 1,
      description: 'Вы уверены что хотите это приготовить? Серьезно?'
  })
  Recipe.create({
    title: 'Buffalo wings',
      category: 'chicken',
      ingredients: 'chicken, hot sauce',
      images: 'http://cookdiary.net/wp-content/uploads/images/BUFFALO-CHICKEN-WINGS_9944.jpg',
      likes: 10,
      description: 'put wings in the oven'
  })
  Recipe.create({
    title: 'Пельмени',
      category: 'russian',
      ingredients: 'Фарш, мука и много времени',
      images: 'http://www.gastronom.ru/binfiles/images/20150909/b277d55e.jpg',
      likes: 5,
      description: 'Можно сварить готовые'
  })
  Recipe.create({
    title: 'Беляши',
      category: 'russian',
      ingredients: 'Фарш, мука, много масла и много времени',
      images: 'http://takioki.ru/wp-content/uploads/2016/07/2-kak-prigotovit-belyashi-s-myasom-na-skovorode.jpg',
      likes: 122,
      description: 'Ask my Mom'
  })
  Recipe.create({
    title: 'Beef stew',
      category: 'beef',
      ingredients: 'beef, potato, vegetables',
      images: 'https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/2014/09/30301_easy_beef_stew_3000x2000.jpg',
      likes: 85,
      description: 'Stew all the ingredients together for as long as possible'
  })
  Recipe.create({
    title: 'Greek salad',
      category: 'vegetables',
      ingredients: 'Vegetables, feta cheese, good olive oil',
      images: 'http://assets.epicurious.com/photos/576454fb42e4a5ed66d1df6b/master/pass/greek-salad.jpg',
      likes: 5,
      description: 'Mix it'
  })
  Recipe.create({
    title: 'Grilled salmon',
      category: 'no time to cook',
      ingredients: 'salmon',
      images: 'https://i.ytimg.com/vi/dHMZ5tXWI6s/maxresdefault.jpg',
      likes: 56,
      description: 'Grill salmon, do not over-cook'
  })
  Recipe.create({
    title: 'beefsteak',
      category: 'beef',
      ingredients: 'beef, good mood',
      images: 'http://cdn-image.foodandwine.com/sites/default/files/201305-r-florentine-beefsteak_0.jpg',
      likes: 156,
      description: 'Do not over-cook'
  })
})
