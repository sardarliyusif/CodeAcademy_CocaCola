const hamburger = document.getElementById('hamburger');
const hamburgerLeft = document.querySelector('.hamburger-left');
const plusIcon = document.querySelector('.plus-icon');
const brands = document.querySelector('.brands');
const cancel = document.getElementById('cancel');
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');
const scrollToIcon = document.querySelector('.to-head');
const followUs = document.querySelector('.follow-us');
const clBrands = document.querySelector('.cl-brands');
const exploreWorld = document.querySelector('.explore-world');
const followUsLink = document.querySelector('.follow-us-link');
const clBrandsLink = document.querySelector('.cl-brands-link');
const exploreWorldLink = document.querySelector('.explore-world-link');
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
// Activating second menu
plusIcon.addEventListener('click',() => {
    brands.classList.toggle('d-none');
})
// Scroll to
scrollToIcon.addEventListener('click',() => {
    window.scrollTo(0,0)
})
// For COMPACT LIST
followUsLink.addEventListener('click',() => {
    followUsLink.classList.add('active');
    clBrandsLink.classList.remove('active');
    exploreWorldLink.classList.remove('active');

    clBrands.classList.add('d-none');
    clBrands.classList.remove('d-flex');
    exploreWorld.classList.add('d-none');
    exploreWorld.classList.remove('d-flex');
    followUs.classList.add('d-flex');
    followUs.classList.remove('d-none');

})
clBrandsLink.addEventListener('click',() => {
    clBrandsLink.classList.add('active');
    followUsLink.classList.remove('active');
    exploreWorldLink.classList.remove('active');

    followUs.classList.add('d-none');
    followUs.classList.remove('d-flex');
    exploreWorld.classList.add('d-none');
    exploreWorld.classList.remove('d-flex');
    clBrands.classList.add('d-flex');
    clBrands.classList.remove('d-none');
    
})
exploreWorldLink.addEventListener('click',() => {
    exploreWorldLink.classList.add('active');
    clBrandsLink.classList.remove('active');
    followUsLink.classList.remove('active');

    clBrands.classList.add('d-none');
    clBrands.classList.remove('d-flex');
    followUs.classList.add('d-none');
    followUs.classList.remove('d-flex');
    exploreWorld.classList.add('d-flex');
    exploreWorld.classList.remove('d-none');
})