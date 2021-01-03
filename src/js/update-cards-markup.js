import {gallaryContainer} from './refs'
import cards from '../templates/cards.hbs'
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/core/dist/PNotify.css";
import { success, notice } from '@pnotify/core';

function cardsMarkup(hits) {
    if (hits.length === 0) {
        notice('There is no matches found.')
    } else {
        success('Good Choice!!')
        const markup = cards(hits)
        gallaryContainer.insertAdjacentHTML('beforeend', markup)
    }
}
export default cardsMarkup

// function updateMarkup(countryInfo) {
//     if (countryInfo.status === 404) {
//     notice('There is no matches found.') 
//     } else if  (countryInfo.length === 1) {
//     const markup = country(countryInfo);
//     refs.container.insertAdjacentHTML('beforeend', markup);
//   } else if (countryInfo.length > 1 && countryInfo.length < 11) {
//     const markup = list(countryInfo);
//     refs.container.insertAdjacentHTML('beforeend', markup);
//   } else {
//     error('Too many mathces found. Please enter a more specific query!');
//   }
// }
