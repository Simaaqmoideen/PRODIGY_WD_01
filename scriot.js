window.onscroll = function() {
  const nav = document.getElementById('navbar');
  
  // Check if page is scrolled more than 50px
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};