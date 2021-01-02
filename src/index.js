import './css/normalize.css'
import './css/common.css';
import apiService from './js/apiService'
import refs from './js/refs'
import cardsMarkup from './js/update-cards-markup'


refs.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const form = event.currentTarget
    apiService.query = form.elements.query.value
    refs.gallaryContainer.innerHTML = '';

    apiService.resetPage();
    refs.loadMoreBtn.classList.add('is-hidden')

    apiService.fetchCards().then(hits => {
        cardsMarkup(hits)
        refs.loadMoreBtn.classList.remove('is-hidden')
    })

    console.log(document)
    window.scrollTo({
        // top: document.documentElement.offsetHeight,
        top: 500,
        behavior: 'smooth'
    })

    form.reset()
});

refs.loadMoreBtn.addEventListener('click', () => {
    apiService.fetchCards().then(hits => cardsMarkup(hits))

    console.log(document)
    
    window.scrollTo({
        // top: document.documentElement.offsetHeight,
        top: 500,
        behavior: 'smooth'
    })
})


