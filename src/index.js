import './css/normalize.css'
import './css/common.css';
import apiService from './js/apiService'
import {gallaryContainer, searchForm } from './js/refs'
import cardsMarkup from './js/update-cards-markup'
import loadMoreBtn from './js/components/load-more-button'
// import * as basicLightbox from 'basiclightbox'
import onClick from './js/show-large-card'



gallaryContainer.addEventListener('click', onClick)

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget
    apiService.query = form.elements.query.value
    
    clearGallaryContainer();
    apiService.resetPage();
    fetchCards();
    form.reset();
    
});

loadMoreBtn.refs.button.addEventListener('click', fetchCards)


function fetchCards() {
    loadMoreBtn.disable();

    apiService.fetchCards().then(hits => {
            cardsMarkup(hits);
            loadMoreBtn.show();
            loadMoreBtn.enable();
           

            window.scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: 'smooth'
            });
        })
        
}

function clearGallaryContainer() {
gallaryContainer.innerHTML = '';
}