import { gallaryContainer } from './refs';
import cards from '../templates/cards.hbs';
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/core/dist/PNotify.css";
import { success, notice } from '@pnotify/core';

function cardsMarkup(hits) {
    if (hits.length === 0) {
        notice('There is no matches found.')
    } else {
        success('Good Choice! We are loading data!')
        const markup = cards(hits)
        gallaryContainer.insertAdjacentHTML('beforeend', markup)
    }
}
export default cardsMarkup


