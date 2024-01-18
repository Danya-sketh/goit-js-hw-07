

const categoriesList = document.querySelector('#categories');

const categoriesItems = categoriesList.querySelectorAll('li.item');


console.log('Кількість категорій:', categoriesItems.length);


categoriesItems.forEach((category) => {
  
  const categoryTitle = category.querySelector('h2').textContent;

  
  const categoryItems = category.querySelectorAll('ul > li');

  
  console.log(`${categoryTitle} - Кількість елементів: ${categoryItems.length}`);
});


