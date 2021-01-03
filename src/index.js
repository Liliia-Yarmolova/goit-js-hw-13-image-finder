import './css/normalize.css'
import './css/common.css';
import apiService from './js/apiService'
import {gallaryContainer, searchForm } from './js/refs'
import cardsMarkup from './js/update-cards-markup'
import loadMoreBtn from './js/components/load-more-button'
import * as basicLightbox from 'basiclightbox'


// const instance = basicLightbox.create(
//     `<img src="assets/images/image.png" width="800" height="600">`
// galleryRef.addEventListener('click', onClick)


// function onClick (event) {
//     event.preventDefault()
//     const imageRef = event.target

//     if (imageRef.nodeName !== 'IMG') {
//         return
//     }
    
//     currentIndex = Number(event.target.dataset.index)
//     const lagreImageURL = event.target.dataset.source
//     const lagreImageAlt = event.target.alt
//     const lagreImageIndex = event.target.dataset.index
//     onModalOpen()

//     // Подмена значения атрибута src элемента img.lightbox__image.
//     largeImage.src = lagreImageURL
//     largeImage.alt = lagreImageAlt
//     largeImage.setAttribute('data-id', lagreImageIndex)
//  }
// )

// instance.show()

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