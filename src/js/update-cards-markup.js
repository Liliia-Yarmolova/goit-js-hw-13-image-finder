import refs from './refs'
import cards from '../templates/cards.hbs'

function cardsMarkup(hits) {
    const markup = cards(hits)
        refs.gallaryContainer.insertAdjacentHTML('beforeend', markup)
}

export default cardsMarkup