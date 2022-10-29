
  /*variables*/
const div_products = document.getElementById('products');
const color = document.getElementsByClassName('color');
const dec = document.getElementById('dec');
const inc = document.getElementById('inc');
const qty = document.getElementById('qty');
const sidebar_btn = document.getElementById('sidebar-btn');
const left = document.getElementById('left');


/* 
    *open sidebar blog single
    *blog single
*/

sidebar_btn.onclick = function () {
  left.classList.toggle('show');
}

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
var nav_bottom = document.getElementById("nav-bottom");
var fixedHeaderMobile = document.getElementById("fixedHeaderMobile");
var close_menu = document.getElementById("close-menu");
var show_menu = document.getElementById("show-menu");
var nav_cat = document.getElementById("categorie-mobile");
var close_cat = document.getElementById("close-cat");
var nav_mobile = document.getElementById("nav-mobile");
var show_cat = document.getElementById("show-cat");
var site = document.getElementById("site");

// Get the offset position of the navbar
var position = header.offsetTop;
var position_nav_bottom = nav_bottom.offsetTop;


window.onscroll = function(){
  // console.log(window.pageYOffset);
  if (window.pageYOffset > position) {
      fixedHeader.style.visibility = 'visible';
      fixedHeaderMobile.style.visibility = 'visible';
    }else{
      
      fixedHeader.style.animation = 'moveFromTop 600ms ease';
      fixedHeader.style.visibility = 'hidden';
      fixedHeaderMobile.style.visibility = 'hidden';
  }

  if (window.pageYOffset < 1) {
    
    nav_bottom.classList.remove('fade');

  }else{ 

    nav_bottom.classList.add('fade');
    nav_bottom.style.animation = 'growDown 600ms ease';

}
  
}

// Close the menu
close_menu.onclick= function () {
  nav_mobile.classList.remove('show');
}


// Close the menu
close_cat.onclick= function () {
  nav_cat.classList.remove('show');
  site.style.opacity = '1';
}


// Show the menu
show_menu.onclick= function () {
  nav_mobile.classList.add('show');
}


// Show the menu cat
show_cat.onclick= function () {
  nav_cat.classList.add('show');
  site.style.opacity = '0.3';
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


/*
  * Hide options 
  * Product list
  * 
 */

function hideoptions(e) {

  e.onclick = function () {
    document.getElementById('options-products').classList.toggle('show');  
  }


}
