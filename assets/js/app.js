const hamburger = document.getElementById('hamburger');
const hamburgerLeft = document.querySelector('.hamburger-left');
const plusIcon = document.querySelector('.plus-icon');
const brands = document.querySelector('.brands');
const cancel = document.getElementById('cancel');
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
// For hamburger icon click
hamburger.addEventListener('click',() => {
    hamburger.classList.add('d-none');
    hamburger.classList.remove('d-block');
    cancel.classList.remove('d-none');
    hamburgerLeft.classList.remove('d-none');
    
})
// For cancel icon click
cancel.addEventListener('click',() => {
    hamburger.classList.remove('d-none');
    hamburger.classList.add('d-block');
    cancel.classList.add('d-none');
    hamburgerLeft.classList.add('d-none');
    brands.classList.add('d-none');
})
// For input 
searchIcon.addEventListener('click',() => {
    searchInput.classList.toggle('d-block');
})

plusIcon.addEventListener('click',() => {
    brands.classList.toggle('d-none');
})