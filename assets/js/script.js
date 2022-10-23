
  /*variables*/
const div_products = document.getElementById('products');
const color = document.getElementsByClassName('color');
const dec = document.getElementById('dec');
const inc = document.getElementById('inc');
const qty = document.getElementById('qty');


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
    * show the header fixed while scrolling
    * home page    
*/

// Get the header
var header = document.getElementById("myHeader");
var fixedHeader = document.getElementById("fixedHeader");

// Get the offset position of the navbar
var position = header.offsetTop;


window.onscroll = function(){
  if (window.pageYOffset > position) {
      fixedHeader.style.visibility = 'visible';
    }else{
      
      fixedHeader.style.animation = 'moveFromTop 600ms ease';
      fixedHeader.style.visibility = 'hidden';
  }
}

/* 
    * quantity increase or decrease
    * product details page    
*/
if (dec) {
  dec.onclick =  decreseQty;
}

if (dec) {
  inc.onclick =  increaseQty;
}


function decreseQty(){

  if (qty.value==1) {
    
  }else{
    qty.value = --qty.value;
  }
}

function increaseQty(){
  qty.value = ++qty.value;
}



/*
  * set Activ image on produit single
  * Product single
  * */
function setActiveImage(id) {

  document.querySelectorAll('.image-box').forEach(element => {
    
    element.classList.remove('active');

  }); 
  
  document.querySelectorAll('.image-gallery img').forEach(element => {
    
    element.classList.remove('active');

  });  

  
  document.querySelectorAll('.'+id).forEach(element => {
    
    element.classList.add('active');

  });

}


/*
  * set Activ tab on produit single
  * Product single
  * */
function setActiveTab(id) {

  document.querySelectorAll('.tab-link').forEach(element => {
    
    element.classList.remove('active');

  }); 
  
  document.querySelectorAll('.tab').forEach(element => {
    
    element.classList.remove('active');

  });  
  
  document.querySelectorAll('.'+id).forEach(element => {
    
    element.classList.add('active');

  });

}


/*
  * Set Active Devise
  * Header
  * 
 */

function setActiveDevise(e) {

  document.querySelectorAll('.devise-btn').forEach(element => {
    
    element.classList.remove('active');

  }); 
  
  e.classList.toggle('active');

}
