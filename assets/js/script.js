/*variables*/
const div_products = document.getElementById('products');


/* 
    *initailiser le carousel slider swipper 
    *page d'acceuil
*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
 
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

/* 
    * animation fade
    * supprimer un div de la cart 
    * cart
*/
function removeListItem(e) {
  let parent = e.parentElement; 
  parent.classList.add('fade');
  setTimeout(() => {
    parent.remove();
  }, 1000);
}


/* 
    * ajout d'un article au panier
    * css 
    
*/
function addFillCss(e) {
  e.classList.add('fill_in');
}

/* 
    * scroll to the left the trending product
    * home page
    
*/
/*
const slider = document.querySelector('.products');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});*/